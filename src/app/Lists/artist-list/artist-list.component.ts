import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../../Model/Artist';
import { Track } from '../../Model/Track';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
})
export class ArtistListComponent implements OnInit {
  @Input()
  artist_list: Artist[];

  constructor() {}

  ngOnInit() {}

  @Output()
  newItemEvent = new EventEmitter<Track[]>();

  FindSongList(track_list: Track[]) {
    console.log('ArtistList : Found ', track_list);

    this.newItemEvent.emit(track_list);
  }
}
