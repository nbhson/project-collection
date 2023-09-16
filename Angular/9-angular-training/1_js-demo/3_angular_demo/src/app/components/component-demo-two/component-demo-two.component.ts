import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from 'src/app/services/demo-service.service';

@Component({
  selector: 'app-component-demo-two',
  templateUrl: './component-demo-two.component.html',
  styleUrls: ['./component-demo-two.component.css'],
  providers: [DemoServiceService]
})
export class ComponentDemoTwoComponent implements OnInit {

  constructor(
    private demoService: DemoServiceService
  ) { }

  ngOnInit() {
    this.demoService.sum(10, 10);
    console.log(this.demoService.total);
  }

}
