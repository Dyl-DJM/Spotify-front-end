import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-navbar',
  templateUrl: './album-navbar.component.html',
  styleUrls: ['./album-navbar.component.css'],
})
export class AlbumNavbarComponent implements OnInit {
  research: string;

  paramValue: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramValue = this.route.snapshot.paramMap.get('myParam');
  }

  LaunchSearch(key: KeyboardEvent) {
    if (key.key === 'Enter') {
      this.newItemEvent.emit(this.research);
    }
  }

  @Output()
  newItemEvent = new EventEmitter<String>();
}
