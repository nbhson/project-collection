import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CLIENT_ID, CLIENT_SECRET } from 'src/app/const/spotify.const';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  readonly authUrl = 'https://accounts.spotify.com/api/token';
  readonly tracksUrl =
    'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B';

  constructor(private _http: HttpClient) {}

  getAuthToken() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    });
    const body = 'grant_type=client_credentials';
    return this._http.post(this.authUrl, body, { headers });
  }

  getSeveralTracks() {
    return this._http.get(this.tracksUrl);
  }
}
