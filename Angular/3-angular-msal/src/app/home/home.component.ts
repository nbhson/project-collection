import { Component, OnInit } from '@angular/core';
import { AzureService } from '../azure.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLogged = false;
  constructor(private azureService: AzureService) { }

  ngOnInit() {
    this.azureService.isUserlogged.subscribe((data) => {
      this.isUserLogged = data;
    })
  }

}
 