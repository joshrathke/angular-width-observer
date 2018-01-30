import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
export interface AngularWidthObserverOptions {
    breakpoints: object;
    max: string;
}
export declare class AngularWidthObserverDirective implements OnInit {
    private Element;
    AngularWidthObserverOptions: AngularWidthObserverOptions;
    UpdateElementPixelWidth: EventEmitter<number>;
    UpdateElementWidth: EventEmitter<string>;
    private ElementPixelWidth;
    private ElementWidth;
    constructor(Element: ElementRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    calculateElementWidth(Width: number): string;
    setElementPixelWidth(ElementPixelWidth: number): void;
    watchElementPixelWidth(): Observable<number>;
    setElementWidth(ElementWidth: string): void;
    watchElementWidth(): Observable<string>;
}
