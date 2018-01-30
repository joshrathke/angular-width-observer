import { Directive, ElementRef, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Subject as Subject$1 } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
// Import RxJs Dependencies
var AngularWidthObserverDirective = (function () {
    /**
     * @param {?} Element
     */
    function AngularWidthObserverDirective(Element) {
        this.Element = Element;
        this.AngularWidthObserverOptions = null;
        this.UpdateElementPixelWidth = new EventEmitter();
        this.UpdateElementWidth = new EventEmitter();
        this.ElementPixelWidth = new Subject$1();
        this.ElementWidth = new Subject$1();
    }
    /**
     * @return {?}
     */
    AngularWidthObserverDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to the Pixel Width of the Element
        this.watchElementPixelWidth()
            .distinctUntilChanged(function (_PrevValue, _CurValue) { return _PrevValue === _CurValue; })
            .subscribe(function (_ElementPixelWidth) {
            console.log(_ElementPixelWidth);
            // Emit the Element Pixel Width
            _this.UpdateElementPixelWidth.emit(_ElementPixelWidth);
            // Define the Command Module Width Classification
            _this.setElementWidth(_this.calculateElementWidth(_ElementPixelWidth));
        });
        // Subscribe to the Width
        this.watchElementWidth()
            .distinctUntilChanged(function (_PrevValue, _CurValue) { return _PrevValue === _CurValue; })
            .subscribe(function (_ElementWidth) {
            console.log(_ElementWidth);
            // Emit the Command Module Width
            _this.UpdateElementWidth.emit(_ElementWidth);
        });
    };
    /**
     * @return {?}
     */
    AngularWidthObserverDirective.prototype.ngDoCheck = function () {
        // Assign the Latest Pixel Width to the Behavior Subject
        this.setElementPixelWidth(this.Element.nativeElement.offsetWidth);
    };
    /**
     * @param {?} Width
     * @return {?}
     */
    AngularWidthObserverDirective.prototype.calculateElementWidth = function (Width) {
        // Set the Width Classification to the Max
        var /** @type {?} */ WidthClassification = this.AngularWidthObserverOptions.max;
        // Match the Width to the correct breakpoint.
        for (var /** @type {?} */ Breakpoint in this.AngularWidthObserverOptions.breakpoints) {
            if (Width < this.AngularWidthObserverOptions.breakpoints[Breakpoint]) {
                WidthClassification = Breakpoint;
                break;
            }
        }
        // Return the Width Classification
        return WidthClassification;
    };
    /**
     * @param {?} ElementPixelWidth
     * @return {?}
     */
    AngularWidthObserverDirective.prototype.setElementPixelWidth = function (ElementPixelWidth) {
        this.ElementPixelWidth.next(ElementPixelWidth);
    };
    /**
     * @return {?}
     */
    AngularWidthObserverDirective.prototype.watchElementPixelWidth = function () {
        return this.ElementPixelWidth.asObservable();
    };
    /**
     * @param {?} ElementWidth
     * @return {?}
     */
    AngularWidthObserverDirective.prototype.setElementWidth = function (ElementWidth) {
        this.ElementWidth.next(ElementWidth);
    };
    /**
     * @return {?}
     */
    AngularWidthObserverDirective.prototype.watchElementWidth = function () {
        return this.ElementWidth.asObservable();
    };
    return AngularWidthObserverDirective;
}());
AngularWidthObserverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[AngularWidthObserver]',
                exportAs: 'AngularWidthObserver'
            },] },
];
/**
 * @nocollapse
 */
AngularWidthObserverDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
AngularWidthObserverDirective.propDecorators = {
    'AngularWidthObserverOptions': [{ type: Input },],
    'UpdateElementPixelWidth': [{ type: Output },],
    'UpdateElementWidth': [{ type: Output },],
};
// Import Angular Component Width Observer Directive
var AngularWidthObserverModule = (function () {
    function AngularWidthObserverModule() {
    }
    return AngularWidthObserverModule;
}());
AngularWidthObserverModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AngularWidthObserverDirective
                ],
                exports: [
                    AngularWidthObserverDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
AngularWidthObserverModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { AngularWidthObserverModule, AngularWidthObserverDirective as ɵa };
//# sourceMappingURL=angular-width-observer.es5.js.map
