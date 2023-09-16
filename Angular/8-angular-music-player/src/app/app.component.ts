import { Component } from '@angular/core';
import { MusicService } from './services/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentSong: string;
  isPlaying: boolean;
  volume: number;

  constructor(private musicService: MusicService) {
    this.currentSong = '';
    this.isPlaying = false;
    this.volume = 50;
  }
}
