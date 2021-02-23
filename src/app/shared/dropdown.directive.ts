import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isMenuOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event): void {
    this.isMenuOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isMenuOpen : false;
  }

  constructor(private elementRef: ElementRef) { }

}
