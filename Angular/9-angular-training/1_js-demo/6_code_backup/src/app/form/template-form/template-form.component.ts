import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  // form => #form="ngForm"
  @ViewChild('form') userForm!: NgForm;

  constructor() {}

  ngOnInit(): void {
    console.log(this.userForm);
  }

  ngAfterViewInit(): void {
    console.log(this.userForm);
  }

  onSubmit(): void {
    console.log(this.userForm);
  }
}
