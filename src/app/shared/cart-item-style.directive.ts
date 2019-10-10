import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appCartItemStyle]'
})
export class CartItemStyleDirective {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }

  @HostListener("focus")
  onFocus() {
    this.renderer.addClass(this.elRef.nativeElement, 'hightligth');
  }

  @HostListener("blur")
  onBlur() {
    this.renderer.removeClass(this.elRef.nativeElement, 'hightligth');
  }
}