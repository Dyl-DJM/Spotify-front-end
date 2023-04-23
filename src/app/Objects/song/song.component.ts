import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../Model/Track';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  @Input()
  song: Track;

  constructor() {}

  ngOnInit() {}
}
