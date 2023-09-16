import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3_angular_demo';
  heroBirthday = new Date(2020, 4, 5);
  arrNumber: Array<number> = [1,2,3,4,5,6,7,8,9];

  constructor() { }


}
