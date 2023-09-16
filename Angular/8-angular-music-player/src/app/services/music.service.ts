import { Injectable } from '@angular/core';
import { Song } from '../model/song.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private isPlayingSubject: Subject<boolean> = new Subject<boolean>();
  private currentSongSubject: Subject<Song> = new Subject<Song>();
  private volumeSubject: Subject<number> = new Subject<number>();
  private progressSubject: Subject<number> = new Subject<number>();

  isPlaying$: Observable<boolean> = this.isPlayingSubject.asObservable();
  currentSong$: Observable<Song> = this.currentSongSubject.asObservable();
  volume$: Observable<number> = this.volumeSubject.asObservable();
  progress$: Observable<number> = this.progressSubject.asObservable();

  private songs: Array<Song> = [
    {
      id: 1,
      name: 'Song 1',
      src: 'assets/48be-5d23-4edc-9828-71f00cc2773e.mp3',
    },
  ];
  private currentSongIndex: number = 0;
  private audio: HTMLAudioElement = new Audio();

  constructor() {
    this.audio.src = this.songs[this.currentSongIndex].src;

    this.audio.addEventListener('timeupdate', () => {
      const currentTime = this.audio.currentTime;
      const duration = this.audio.duration;
      const progress = (currentTime / duration) * 100;
      this.progressSubject.next(progress);
    });
  }

  getSongs() {
    return this.songs;
  }

  selectSong(id: number) {
    this.currentSongIndex = this.songs.findIndex((song) => song.id === id);
    this.audio.src = this.songs[this.currentSongIndex].src;
    this.playPause();
  }

  playPause() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.isPlayingSubject.next(!this.audio.paused);
  }

  next() {
    if (this.currentSongIndex < this.songs.length - 1) {
      this.currentSongIndex++;
      this.audio.src = this.songs[this.currentSongIndex].src;
      this.audio.play();
      this.currentSongSubject.next(this.songs[this.currentSongIndex]);
    }
  }

  previous() {
    if (this.currentSongIndex > 0) {
      this.currentSongIndex--;
      this.audio.src = this.songs[this.currentSongIndex].src;
      this.audio.play();
      this.currentSongSubject.next(this.songs[this.currentSongIndex]);
    }
  }

  setVolume(volume: number) {
    if (volume >= 0 && volume <= 100) {
      this.audio.volume = volume / 100;
      this.volumeSubject.next(this.audio.volume * 100);
    }
  }
}
