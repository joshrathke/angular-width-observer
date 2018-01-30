import { NgModule } from '@angular/core';
// Import Angular Component Width Observer Directive
import { AngularWidthObserverDirective } from './angular-width-observer.directive';

@NgModule({
  declarations: [
    AngularWidthObserverDirective
  ],
  exports: [
    AngularWidthObserverDirective
  ]
})
export class AngularWidthObserverModule {}