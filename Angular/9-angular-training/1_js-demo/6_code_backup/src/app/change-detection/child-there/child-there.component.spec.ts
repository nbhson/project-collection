/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildThereComponent } from './child-there.component';

describe('ChildThereComponent', () => {
  let component: ChildThereComponent;
  let fixture: ComponentFixture<ChildThereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildThereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildThereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
