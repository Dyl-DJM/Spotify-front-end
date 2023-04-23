import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input()
  username: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  @Output()
  newItemEvent = new EventEmitter<string>();

  ArtistSearch() {
    console.log('Menu : Artist');
    this.newItemEvent.emit('artist');
  }

  AlbumSearch() {
    this.newItemEvent.emit('album');
  }

  Connexion() {
    this.newItemEvent.emit('connexion');
  }

  PlayList() {
    console.log('Menu : Playlist');

    this.newItemEvent.emit('playlist');
  }
}
