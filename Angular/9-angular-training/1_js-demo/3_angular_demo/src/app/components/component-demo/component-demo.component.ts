import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../../services/demo-service.service';

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css'],
  providers: [DemoServiceService]
})
export class ComponentDemoComponent implements OnInit {

  constructor(
    private demoService: DemoServiceService
  ) { }

  ngOnInit() {
    let sum = this.demoService.sum(5,5);
    console.log(sum);
    console.log(this.demoService.total);
    
  }

}
