import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FormatStringPipe } from './pipe/format-string.pipe';
import { HightLightDirective } from './directives/hight-light.directive';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    FormatStringPipe,
    HightLightDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule, UserRoutingModule],
  providers: [
    { provide: 'SERVICE_TOKEN', useClass: UserService },
    { provide: 'FORM_BUILDER', useClass: FormBuilder },
  ],
})
export class UserModule {}
