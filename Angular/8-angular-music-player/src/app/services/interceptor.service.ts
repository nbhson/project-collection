import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor(private _spotifyService: SpotifyService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const spotifyToken = this._spotifyService.getToken();
    if (spotifyToken) {
      request = this.setHeader(request, spotifyToken);
    } else {
      return next.handle(request);
    }
    return next.handle(request);
  }

  setHeader(request: HttpRequest<any>, token: string) {
    if (token) {
      token = `Bearer ${token}`;
    }
    return request.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }
}
