import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScrollToBottomDirective } from './directive/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ScrollToBottomDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [MaterialModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
