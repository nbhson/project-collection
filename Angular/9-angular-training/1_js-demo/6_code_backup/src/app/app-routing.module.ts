import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/404/404.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo-module/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-module/user.module').then((m) => m.UserModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'change-detection',
    loadChildren: () =>
      import('./change-detection/change-detection.module').then((m) => m.ChangeDetectionModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
