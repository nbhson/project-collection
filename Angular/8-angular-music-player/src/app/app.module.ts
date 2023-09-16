import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { SpotifyService } from './services/spotify.service';
import { AppInitializerFactory } from './const/spotify.const';

@NgModule({
  declarations: [AppComponent, MusicListComponent, MusicPlayerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    SpotifyService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitializerFactory,
      multi: true,
      deps: [SpotifyService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
