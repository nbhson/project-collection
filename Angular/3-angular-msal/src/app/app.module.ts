import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AzureService } from './azure.service';
import { BlogComponent } from './blog/blog.component';

const isIE =
  window.navigator.userAgent.indexOf('MSIE') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;
@NgModule({
  declarations: [			AppComponent,
      ProfileComponent,
      HomeComponent,
      BlogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '1415ddf3-2abe-4d53-8619-3738460f3d7b',
          redirectUri: 'http://localhost:4200/',
          postLogoutRedirectUri: 'http://localhost:4200/blog/',
          authority: 'https://login.microsoftonline.com/60370846-51d4-4a09-93a1-da83cf5e177d/',
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE,
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read'],
        },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.Read']],
        ]),
      }
    ),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useValue: MsalInterceptor, multi: true },
    MsalGuard,
    AzureService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
