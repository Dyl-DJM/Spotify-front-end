import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  type = 0;

  paramValue: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramValue = this.route.snapshot.paramMap.get('username');

    console.log('Home : ', this.paramValue);

    this.type = 0;

    console.log('Home : ', this.route.snapshot.paramMap.get('type'));

    if (this.route.snapshot.paramMap.get('type') === 'playlists') {
      this.type = 4;
    }
  }

  changeType(item: string) {
    if (item == 'artist') {
      this.type = 1;
    }

    if (item == 'album') {
      this.type = 2;
    }

    if (item == 'connexion') {
      this.type = 3;
    }

    if (item == 'playlist') {
      this.type = 4;
    }
  }
}
