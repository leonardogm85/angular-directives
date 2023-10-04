import { Directive, /*ElementRef, Renderer2, */HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {

  @HostListener('mouseenter') onMouseEnter(): void {
    // Using ElementRef and Renderer2

    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'backgroundColor',
    //   'yellow'
    // );

    // Using HostBinding
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    // Using ElementRef and Renderer2

    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'backgroundColor',
    //   'white'
    // );

    // Using HostBinding
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

  // constructor(
  //   private _elementRef: ElementRef,
  //   private _renderer: Renderer2
  // ) { }

}
