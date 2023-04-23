import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Artist } from '../../Model/Artist';

@Component({
  selector: 'app-artist-navbar',
  templateUrl: './artist-navbar.component.html',
  styleUrls: ['./artist-navbar.component.css'],
})
export class ArtistNavbarComponent implements OnInit {
  research: String;

  constructor() {}

  ngOnInit() {}

  LaunchSearch(key: KeyboardEvent) {
    if (key.key === 'Enter') {
      this.newItemEvent.emit(this.research);
    }
  }

  @Output()
  newItemEvent = new EventEmitter<String>();
}
