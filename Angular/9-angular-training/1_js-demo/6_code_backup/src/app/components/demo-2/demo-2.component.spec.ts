/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Demo-2Component } from './demo-2.component';

describe('Demo-2Component', () => {
  let component: Demo-2Component;
  let fixture: ComponentFixture<Demo-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
