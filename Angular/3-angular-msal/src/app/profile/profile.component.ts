import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  
  constructor(private authService: MsalService) { }

  ngOnInit() {
    // this.user = this.authService.instance.getActiveAccount();
    this.user = this.authService.instance.getAllAccounts()[0];
  }

}
