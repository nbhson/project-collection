import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
 
  inputSearchText: string = '';
  @Input() myName: string = '';
  @Output() changeTextEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  updateSearchText(value: string) {
    // console.log(value); // b1
    this.changeTextEvent.emit(value)
  }
}
