import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentSong: string;
  isPlaying: boolean;
  volume: number;

  constructor( ) {
    this.currentSong = '';
    this.isPlaying = false;
    this.volume = 50;
  }
  ngOnInit(): void { }
}
