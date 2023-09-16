import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './change-detection.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';

@NgModule({
  imports: [CommonModule, ChangeDetectionRoutingModule],
  declarations: [
    ChangeDetectionComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
})
export class ChangeDetectionModule {}
