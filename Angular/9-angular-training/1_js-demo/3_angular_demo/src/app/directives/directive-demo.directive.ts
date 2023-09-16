import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class DirectiveDemoDirective implements AfterViewInit {

  @Input() changeColor!: boolean;
  
  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    if (this.changeColor) {
      this.addStyle();
    }
  }

  addStyle() {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.innerHTML = 'Hello';
  }

}
