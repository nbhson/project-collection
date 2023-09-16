/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Demo-1Component } from './demo-1.component';

describe('Demo-1Component', () => {
  let component: Demo-1Component;
  let fixture: ComponentFixture<Demo-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
