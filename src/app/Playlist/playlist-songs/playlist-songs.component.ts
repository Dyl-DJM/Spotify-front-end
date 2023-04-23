import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../../Model/Playlist';
import { Track } from '../../Model/Track';
import { SpotifyService } from '../../spotify.service';

@Component({
  selector: 'app-playlist-songs',
  templateUrl: './playlist-songs.component.html',
  styleUrls: ['./playlist-songs.component.css'],
})
export class PlaylistSongsComponent implements OnInit {
  songs: Track[];
  @Input()
  monInput: Playlist;

  service: SpotifyService;

  constructor(service: SpotifyService) {
    console.log('PLaylist_songs : ', this.monInput);

    this.service = service;

    this.service.getSongsOfPlaylist(this.monInput).subscribe((data) => {
      this.songs = data.tracks;
    });
  }

  ngOnInit() {}
}
