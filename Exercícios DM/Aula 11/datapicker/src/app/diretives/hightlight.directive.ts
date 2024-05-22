import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HightlighDirective {
  @HostBinding('class.highlight') isHighlighted = false;

  @HostListener('mouseover') onMouseOver() {
    this.isHighlighted = true;
  }
  @HostListener('mouseout') onMouseOut() {
    this.isHighlighted = false;
  }
}
