import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group(
      {
        fullName: ['Son', Validators.compose([Validators.required])],
        email: ['son@gmail.com', Validators.compose([Validators.required, Validators.email])],
        password: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
        confirmPassword: [null, Validators.compose([Validators.required])],
      }
    );
  }

  onSubmit(): void {
    console.log(this.form);
  }

  get f() {
    return this.form.controls;
  }
}
