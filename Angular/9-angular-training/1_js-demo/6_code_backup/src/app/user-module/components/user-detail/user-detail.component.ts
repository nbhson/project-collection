import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userDetail: any = null;

  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    let userId = this.router.snapshot.params['id'];
    this.userDetail = this.userService.getUserByID(+userId);
  }

}
