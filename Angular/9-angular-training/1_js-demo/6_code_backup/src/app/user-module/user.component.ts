import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userDetail: any = null;
  
  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      let userId = params['id'];
      this.userDetail = this.userService.getUserByID(+userId);
    })
  }

}
