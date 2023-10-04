import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFullHighlight]'
})
export class FullHighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
