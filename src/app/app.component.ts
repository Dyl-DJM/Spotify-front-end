import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  type = 0;
  name = 'Angular';

  paramValue: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramValue = this.route.snapshot.paramMap.get('username');

    this.type = 0;
    console.log('AppModule : ', this.paramValue);
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
  }
}
