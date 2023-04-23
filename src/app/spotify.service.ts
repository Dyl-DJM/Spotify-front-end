import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { AlbumResponse } from './Model/AlbumResponse';
import { ArtistResponse } from './Model/ArtistResponse';
import { Playlist } from './Model/Playlist';
import { PlaylistResponse } from './Model/PlaylistResponse';
import { TrackResponse } from './Model/TrackResponse';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  link_album =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/album?name=';

  link: string =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/artist?name=';

  link_playlists =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/user/';

  link_playslist_songs =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/user/';

  constructor(private httpclient: HttpClient) {}

  transform(chaine: string): string {
    let new_chaine = '';

    for (let letter of chaine) {
      if (letter === ' ') {
        letter = '%20';
      }
      new_chaine = new_chaine.concat(letter);
    }

    return new_chaine;
  }

  getArtistList(artist_name: string): Observable<ArtistResponse> {
    let new_name = this.transform(artist_name);

    let link = this.link.concat(new_name);

    console.log('Main : Link : ', link);

    let observable = this.httpclient.get<ArtistResponse>(link);

    return observable;
  }

  getAlbumList(album_name): Observable<AlbumResponse> {
    let new_name = this.transform(album_name);

    let link_album = this.link_album.concat(new_name);

    let observable = this.httpclient.get<AlbumResponse>(link_album);

    return observable;
  }

  getPlaylist(username: string): Observable<PlaylistResponse> {
    let new_name = this.link_playlists.concat(username).concat('/playlist');

    let observable = this.httpclient.get<PlaylistResponse>(new_name);

    return observable;
  }

  getSongsOfPlaylist(playlist: Playlist): Observable<TrackResponse> {
    let new_name = this.link_playlists
      .concat(playlist.name)
      .concat('/playlist')
      .concat(playlist.id);

    let observable = this.httpclient.get<TrackResponse>(new_name);

    return observable;
  }
}
