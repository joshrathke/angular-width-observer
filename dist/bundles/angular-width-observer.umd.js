(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('rxjs/add/operator/distinctUntilChanged')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Subject', 'rxjs/add/operator/distinctUntilChanged'], factory) :
	(factory((global['angular-width-observer'] = {}),global.ng.core,global.Rx));
}(this, (function (exports,core,Subject) { 'use strict';

// Import RxJs Dependencies
var AngularWidthObserverDirective = (function () {
    /**
     * @param {?} Element
     */
    function AngularWidthObserverDirective(Element) {
        this.Element = Element;
        this.AngularWidthObserverOptions = null;
        this.UpdateElementPixelWidth = new core.EventEmitter();
        this.UpdateElementWidth = new core.EventEmitter();
        this.ElementPixelWidth = new Subject.Subject();
        this.ElementWidth = new Subject.Subject();
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
    { type: core.Directive, args: [{
                selector: '[AngularWidthObserver]',
                exportAs: 'AngularWidthObserver'
            },] },
];
/**
 * @nocollapse
 */
AngularWidthObserverDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
AngularWidthObserverDirective.propDecorators = {
    'AngularWidthObserverOptions': [{ type: core.Input },],
    'UpdateElementPixelWidth': [{ type: core.Output },],
    'UpdateElementWidth': [{ type: core.Output },],
};
// Import Angular Component Width Observer Directive
var AngularWidthObserverModule = (function () {
    function AngularWidthObserverModule() {
    }
    return AngularWidthObserverModule;
}());
AngularWidthObserverModule.decorators = [
    { type: core.NgModule, args: [{
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

exports.AngularWidthObserverModule = AngularWidthObserverModule;
exports.ɵa = AngularWidthObserverDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-width-observer.umd.js.map
