import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveDemoDirective } from './directives/directive-demo.directive';
import { ComponentDemoComponent } from './components/component-demo/component-demo.component';
import { PipeDemoPipe } from './pipes/pipe-demo.pipe';
import { DemoServiceService } from './services/demo-service.service';
import { ComponentDemoTwoComponent } from './components/component-demo-two/component-demo-two.component';

@NgModule({
  declarations: [	
    AppComponent,
    DirectiveDemoDirective,
    ComponentDemoComponent,
    ComponentDemoTwoComponent,
    PipeDemoPipe,
   ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DemoServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
