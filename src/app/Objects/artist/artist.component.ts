import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../Model/Artist';
import { Track } from '../../Model/Track';
import { TrackResponse } from '../../Model/TrackResponse';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  show_list = true;

  track: Track[];

  link =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/artist/XXX/tracks';

  @Input()
  artist: Artist;

  constructor(private httpclient: HttpClient) {}

  ngOnInit() {}

  transform(id: string): string {
    let new_chaine = '';

    let concat_id = true;

    for (let letter of this.link) {
      if (letter === 'X') {
        if (concat_id === true) {
          new_chaine = new_chaine.concat(id);
          concat_id = false;
        }
      } else {
        new_chaine = new_chaine.concat(letter);
      }
    }

    return new_chaine;
  }

  @Output()
  newItemEvent = new EventEmitter<Track[]>();

  FindSongList() {
    let link = this.transform(this.artist.id);

    let observable: Observable<TrackResponse> =
      this.httpclient.get<TrackResponse>(link);

    observable.subscribe((data) => {
      this.track = data.tracks;
      this.newItemEvent.emit(this.track);
    });

    this.show_list = false;
  }
}
