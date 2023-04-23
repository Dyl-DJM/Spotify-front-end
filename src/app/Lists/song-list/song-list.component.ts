import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../Model/Track';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
})
export class SongListComponent implements OnInit {
  @Input()
  song_list: Track[];

  constructor() {}

  ngOnInit() {}
}
