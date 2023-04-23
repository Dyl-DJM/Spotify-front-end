import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  username: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  validUsername(f: NgForm) {
    console.log('Connexion : ', f.value.username);

    this.router.navigate(['/home/'.concat(f.value.username)]);
  }
}
