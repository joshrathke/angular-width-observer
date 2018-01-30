import { Directive, ElementRef, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Subject as Subject$1 } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';

// Import RxJs Dependencies
class AngularWidthObserverDirective {
    /**
     * @param {?} Element
     */
    constructor(Element) {
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
    ngOnInit() {
        // Subscribe to the Pixel Width of the Element
        this.watchElementPixelWidth()
            .distinctUntilChanged((_PrevValue, _CurValue) => _PrevValue === _CurValue)
            .subscribe(_ElementPixelWidth => {
            console.log(_ElementPixelWidth);
            // Emit the Element Pixel Width
            this.UpdateElementPixelWidth.emit(_ElementPixelWidth);
            // Define the Command Module Width Classification
            this.setElementWidth(this.calculateElementWidth(_ElementPixelWidth));
        });
        // Subscribe to the Width
        this.watchElementWidth()
            .distinctUntilChanged((_PrevValue, _CurValue) => _PrevValue === _CurValue)
            .subscribe(_ElementWidth => {
            console.log(_ElementWidth);
            // Emit the Command Module Width
            this.UpdateElementWidth.emit(_ElementWidth);
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // Assign the Latest Pixel Width to the Behavior Subject
        this.setElementPixelWidth(this.Element.nativeElement.offsetWidth);
    }
    /**
     * @param {?} Width
     * @return {?}
     */
    calculateElementWidth(Width) {
        // Set the Width Classification to the Max
        let /** @type {?} */ WidthClassification = this.AngularWidthObserverOptions.max;
        // Match the Width to the correct breakpoint.
        for (let /** @type {?} */ Breakpoint in this.AngularWidthObserverOptions.breakpoints) {
            if (Width < this.AngularWidthObserverOptions.breakpoints[Breakpoint]) {
                WidthClassification = Breakpoint;
                break;
            }
        }
        // Return the Width Classification
        return WidthClassification;
    }
    /**
     * @param {?} ElementPixelWidth
     * @return {?}
     */
    setElementPixelWidth(ElementPixelWidth) {
        this.ElementPixelWidth.next(ElementPixelWidth);
    }
    /**
     * @return {?}
     */
    watchElementPixelWidth() {
        return this.ElementPixelWidth.asObservable();
    }
    /**
     * @param {?} ElementWidth
     * @return {?}
     */
    setElementWidth(ElementWidth) {
        this.ElementWidth.next(ElementWidth);
    }
    /**
     * @return {?}
     */
    watchElementWidth() {
        return this.ElementWidth.asObservable();
    }
}
AngularWidthObserverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[AngularWidthObserver]',
                exportAs: 'AngularWidthObserver'
            },] },
];
/**
 * @nocollapse
 */
AngularWidthObserverDirective.ctorParameters = () => [
    { type: ElementRef, },
];
AngularWidthObserverDirective.propDecorators = {
    'AngularWidthObserverOptions': [{ type: Input },],
    'UpdateElementPixelWidth': [{ type: Output },],
    'UpdateElementWidth': [{ type: Output },],
};

// Import Angular Component Width Observer Directive
class AngularWidthObserverModule {
}
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
AngularWidthObserverModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { AngularWidthObserverModule, AngularWidthObserverDirective as ɵa };
//# sourceMappingURL=angular-width-observer.js.map
