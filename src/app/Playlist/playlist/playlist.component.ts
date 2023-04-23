import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '../../Model/Playlist';
import { SpotifyService } from '../../spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[];

  play_list_to_find: Playlist;

  @Input()
  username: string;

  show_playlist: boolean;

  service: SpotifyService;

  constructor(service: SpotifyService) {
    this.service = service;

    this.searchPlaylist();

    console.log();

    this.show_playlist = true;
  }
  ngOnInit() {}

  searchPlaylist() {
    this.service.getPlaylist(this.username).subscribe((data) => {
      this.playlists = data.playlists;
    });
  }

  find(playlist: Playlist) {
    this.show_playlist = false;

    this.play_list_to_find = playlist;

    console.log('Playlist : ', this.play_list_to_find);
  }
}
