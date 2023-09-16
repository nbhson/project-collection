import { Injectable } from '@angular/core';
import { SpotifyApiService } from 'src/api/spotify-api.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private spotifyBearerToken: string = '';

  constructor(private _spotifyApiService: SpotifyApiService) {}

  getToken() {
    return this.spotifyBearerToken;
  }

  getAuthToken() {
    this._spotifyApiService.getAuthToken().subscribe((response: any) => {
      this.spotifyBearerToken = response.access_token;
    });
  }

  getSeveralTracks() {
    this._spotifyApiService.getSeveralTracks().subscribe((response: any) => {
      console.log(response);
    });
  }
}
