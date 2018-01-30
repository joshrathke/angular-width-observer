import { Directive, EventEmitter, Input, OnInit, Output, AfterViewInit, ElementRef } from '@angular/core';
// Import RxJs Dependencies
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';

// Define Command Module Width Type
export interface AngularWidthObserverOptions { breakpoints: object, max: string }

@Directive({
	selector: '[AngularWidthObserver]',
	exportAs: 'AngularWidthObserver'
})

export class AngularWidthObserverDirective implements OnInit {
	@Input() AngularWidthObserverOptions: AngularWidthObserverOptions = null;
	@Output() UpdateElementPixelWidth: EventEmitter<number> = new EventEmitter<number>();
	@Output() UpdateElementWidth: EventEmitter<string> = new EventEmitter<string>();

	private ElementPixelWidth: Subject<number> = new Subject<number>();
	private ElementWidth: Subject<string> = new Subject<string>();

	constructor(
		private Element: ElementRef
	) { }

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
			})

		// Subscribe to the Width
		this.watchElementWidth()
			.distinctUntilChanged((_PrevValue, _CurValue) => _PrevValue === _CurValue)
			.subscribe(_ElementWidth => {
				console.log(_ElementWidth);
				// Emit the Command Module Width
				this.UpdateElementWidth.emit(_ElementWidth);
			})

	}

	ngDoCheck() {
		// Assign the Latest Pixel Width to the Behavior Subject
		this.setElementPixelWidth(this.Element.nativeElement.offsetWidth);
	}

	// Calculate the Element Width Classification
	calculateElementWidth(Width: number) {
		// Set the Width Classification to the Max
		let WidthClassification = this.AngularWidthObserverOptions.max;
		// Match the Width to the correct breakpoint.
		for (let Breakpoint in this.AngularWidthObserverOptions.breakpoints) {
			if (Width < this.AngularWidthObserverOptions.breakpoints[Breakpoint]) {
				WidthClassification = Breakpoint;
				break;
			}
		}
		// Return the Width Classification
		return WidthClassification
	}

	// Element Pixel Width Setter and Watcher
	setElementPixelWidth(ElementPixelWidth: number): void {
		this.ElementPixelWidth.next(ElementPixelWidth);
	}
	watchElementPixelWidth(): Observable<number> {
		return this.ElementPixelWidth.asObservable();
	}

	// Element Width Setter and Watcher
	setElementWidth(ElementWidth: string): void {
		this.ElementWidth.next(ElementWidth);
	}
	watchElementWidth(): Observable<string> {
		return this.ElementWidth.asObservable();
	}
}