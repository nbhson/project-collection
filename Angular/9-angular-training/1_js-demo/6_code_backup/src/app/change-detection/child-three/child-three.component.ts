import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildThreeComponent implements OnInit {

  @Input() numberArr: any;

  constructor() { }

  ngOnInit() {
  }

}
