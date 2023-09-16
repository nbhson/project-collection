import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: ':id', component: UserDetailComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}