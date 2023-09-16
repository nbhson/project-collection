import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  user!: User | string | any;
  form!: FormGroup;

  constructor(
    @Inject('SERVICE_TOKEN') private _userService: UserService,
    @Inject('FORM_BUILDER') private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.handleSnapshot();
  }

  handleSnapshot() {
    let userId = this._activatedRoute.snapshot.params['id'];
    if (userId) {
      this.user = this._userService.getUserById(userId) || '--';
      this.initForm();
    }
  }

  initForm() {
    this.form = this._formBuilder.group({
      name: [this.user.name, Validators.compose([Validators.required, Validators.minLength(5)])],
      email: [this.user.email, Validators.compose([Validators.required])],
      phone: [this.user.phone, Validators.compose([Validators.required])],
      introduce: [this.user.introduce],
      position: [this.user.position],
      gender: [this.user.gender, Validators.compose([Validators.required])],
    });
  }

  submit() {
    // code here
  }

  get f() {
    return this.form.controls;
  }
}
