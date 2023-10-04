import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    // Bad

    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    // Good

    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }

}
