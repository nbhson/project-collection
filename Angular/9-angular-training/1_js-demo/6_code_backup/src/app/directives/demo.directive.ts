import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[boxShadow]',
})
export class DemoDirective {

  @Input() boxShadow: boolean = false;

  constructor(private el: ElementRef) { 
    
  }

  ngOnInit() {
    this.boxShadowFn()
  }

  boxShadowFn() {
    console.log(this.boxShadow);
    
    if (this.boxShadow) {
      this.el.nativeElement.style.boxShadow = '10px 15px 30px yellow';
    } else {
      this.el.nativeElement.style.boxShadow = '10px 15px 30px black';
      // this.el.nativeElement.style.backgroundColor = 'black';
    }
  }
}
