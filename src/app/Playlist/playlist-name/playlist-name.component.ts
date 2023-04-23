import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../../Model/Playlist';

@Component({
  selector: 'app-playlist-name',
  templateUrl: './playlist-name.component.html',
  styleUrls: ['./playlist-name.component.css'],
})
export class PlaylistNameComponent implements OnInit {
  @Input()
  monInput: Playlist;

  @Output()
  newItemEvent = new EventEmitter<Playlist>();

  constructor() {}

  ngOnInit() {}

  find() {
    this.newItemEvent.emit(this.monInput);
  }
}
