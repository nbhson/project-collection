import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user-module/user.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './todo-module/todo.module';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';
@NgModule({
  declarations: [AppComponent, HeaderComponent, DemoPipe, DemoDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    TodoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
