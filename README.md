# Angular Width Observer

Angular Width Observer is a small Angular 2+ module that adds the ability to observe component and element width independent of window size.

## Install
Install using NPM
`npm install angular-width-observer --save`

In order to use the directive you will need to import the `AngularWidthObserverModule` into the module's you want to use the `AngularWidthObserverDirective` in.

```typescript
import { AngularWidthObserverModule } from 'angular-width-observer/angular-width-observer.module';
    
@NgModule({
  imports: [
    AngularWidthObserverModule
   ],
})
export class AppModule { }
```

## Usage

Once installed, you can bind the directive to components and elements.

```html
<app-component AngularWidthObserver></app-component>
```

**Custom Breakpoints**
The Directive doesn't know what you want your breakpoints to be unless you tell it what you want. Bind your breakpoint settings to the Directive by setting the `AngularWidthObserverOptions` input on the Component being monitored.

```html
<app-component AngularWidthObserver [AngularWidthObserverOptions]="{breakpoints: { compact: 520, normal: 640 }, max: 'wide'}"></app-component>
```

Angular Width Observer processes the breakpoints from a bottom up perspective. This means that the breakpoint classifications defined take place within the range below the specified value. The max property is the width classification given to any element that is wider than the largest breakpoint.

## Accessing the Breakpoint Values Within the Component
There are a couple ways to retrieve the values as they are updated.

**UpdateElementPixelWidth** - Event Emitter that emits a numerical representation of the element pixel width.

**UpdateElementWidth** - Event Emitter that emits a string representing the width classification of the current breakpoint.

```typescript
// Listen to Updates in Component Pixel Width
@HostListener('UpdateElementPixelWidth', ['$event']) adjustComponentPixelWidth(ComponentPixelWidth) {
    this.ComponentPixelWidth = ComponentPixelWidth;
}
    
// Listen to Updates in Component Width Classification
@HostListener('UpdateElementWidth', ['$event']) adjustComponentWidth(ComponentWidth) {
    this.ComponentWidth = ComponentWidth;
}
```
