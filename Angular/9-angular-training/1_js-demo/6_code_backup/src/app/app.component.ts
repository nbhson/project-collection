import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '3_angular_demo';
  myName = 'Son Nguyen 123';
  loremText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
  isShow!: boolean;
  divId = 1;
  birthday = new Date(1988, 3, 15);
  todos: any = [];

  constructor(
    private appService: AppService
  ) {
    this.getOwnerTodoComponent();
  }

  changeTextEvent(value: string) {
    this.loremText = value;
  }
  handleClickFirstBtn() {
    this.isShow = true;
  }
  handleClickSecondBtn() {
    this.isShow = false;
  }
  getOwnerTodoComponent() {
    this.todos = this.appService.getOwnerTodo();
  }
}


