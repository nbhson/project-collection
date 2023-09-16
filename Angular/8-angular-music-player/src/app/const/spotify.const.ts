import { SpotifyService } from '../services/spotify.service';

export const CLIENT_ID = '2d030f16b2f2491197a03e2b2607799f';
export const CLIENT_SECRET = 'fdb9c0f27236402087c5c1fa43cc3711';
export const AppInitializerFactory = (spotifyService: SpotifyService) => {
  return () => spotifyService.getAuthToken();
};
