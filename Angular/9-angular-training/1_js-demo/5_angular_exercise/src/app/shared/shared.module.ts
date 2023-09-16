import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent],
  imports: [MaterialModule, RouterModule],
  exports: [MaterialModule, RouterModule, NotFoundComponent, ToolbarComponent],
})
export class SharedModule {}
