import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'update/:id', component: UpdateUserComponent },
  { path: '', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
