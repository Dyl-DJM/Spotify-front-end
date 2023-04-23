import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../Model/Album';
import { AlbumResponse } from '../../Model/AlbumResponse';
import { Artist } from '../../Model/Artist';
import { ArtistResponse } from '../../Model/ArtistResponse';
import { Track } from '../../Model/Track';
import { SpotifyService } from '../../spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  link_album =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/album?name=';

  album_name: string;
  album_list: Album[] = [];

  artist_name: string;
  artist_list: Artist[] = [];

  song_list: Track[];

  type_list;

  link: string =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/artist?name=';

  service: SpotifyService;

  constructor(private httpclient: HttpClient, service: SpotifyService) {
    this.service = service;
  }

  ngOnInit() {}

  @Input()
  type: string;

  notifyUser(artist_name: string) {
    if (this.artist_list != [])
      this.artist_list.splice(0, this.artist_list.length);

    this.service.getArtistList(artist_name).subscribe((data) => {
      if (data.artists !== undefined) {
        for (let artist of data.artists) {
          this.artist_list.push(artist);
        }
      }

      console.log(this.artist_list);
      this.type_list = 0;
    });
  }

  notifyUserByAlbum(album_name: string) {
    if (this.album_list != [])
      this.album_list.splice(0, this.album_list.length);

    this.service.getAlbumList(album_name).subscribe((data) => {
      if (data.albums !== undefined) {
        for (let album of data.albums) {
          this.album_list.push(album);
        }
      }

      this.type_list = 0;
    });
  }

  FindSongList(track_list: Track[]) {
    this.type_list = 1;
    console.log('Main : List type :', this.type_list);
    this.song_list = track_list;
  }
}
