import { Component } from '@angular/core';
import { Song } from 'src/app/model/song.interface';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent {
  songs: Array<Song>= [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.songs = this.musicService.getSongs();
  }

  selectSong(songID: number) {
    this.musicService.selectSong(songID);
  }
}
