import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {
  soccer: number = 1

  user = {
    name: 'Sơn',
    age: 20
  }

  numberArr: number[] = [10]

  constructor() { }

  ngOnInit() {
  }
}
