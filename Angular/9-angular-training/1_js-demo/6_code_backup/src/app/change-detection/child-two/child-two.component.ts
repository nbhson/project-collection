import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent implements OnInit {
  @Input() user!: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('ngOnChanges', JSON.stringify(changes));
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    // this.cdr.markForCheck() // check ngược từ con lên cha
    this.cdr.detectChanges(); // check từ component hiện tại đi xuống những thằng child
  }

  getUser() {
    console.log('getUser');
    return this.user;
  }

  clickMe() {

  }
}
