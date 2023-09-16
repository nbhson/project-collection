import { Component } from '@angular/core';
import { Song } from 'src/app/model/song.interface';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent {
  currentSong: Song | null = null;
  isPlaying: boolean = false;
  volume: number = 100;
  progress: number = 0;

  constructor(private musicService: MusicService) {
    this.musicService.setVolume(this.volume);
  }

  ngOnInit() {
    this.musicService.isPlaying$.subscribe((isPlaying) => {
      this.isPlaying = isPlaying;
    });

    this.musicService.currentSong$.subscribe((song: Song) => {
      this.currentSong = song;
    });

    this.musicService.volume$.subscribe((volume) => {
      this.volume = volume;
    });

    this.musicService.progress$.subscribe((progress) => {
      this.progress = progress;
    });
  }

  playPause() {
    this.musicService.playPause();
  }

  nextSong() {
    this.musicService.next();
  }

  previousSong() {
    this.musicService.previous();
  }

  changeVolume() {
    this.musicService.setVolume(this.volume);
  }
}
