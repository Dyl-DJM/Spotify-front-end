import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../../Model/Album';
import { Track } from '../../Model/Track';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  @Input()
  album_list: Album[];

  constructor() {}

  ngOnInit() {}

  @Output()
  newItemEvent = new EventEmitter<Track[]>();

  FindSongList(track_list: Track[]) {
    console.log('AlbumtList : Found ', track_list);

    this.newItemEvent.emit(track_list);
  }
}
