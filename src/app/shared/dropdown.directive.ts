import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  isOpen = false;

  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
    const part = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(part, 'show');
    } else {
      this.renderer.removeClass(part, 'show');
    }
  }


}
