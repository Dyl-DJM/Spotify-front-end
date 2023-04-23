import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AlbumNavbarComponent } from '../../Navbars/album-navbar/album-navbar.component';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../Home/home/home.component';
import { PlaylistComponent } from '../../Playlist/playlist/playlist.component';

export const routes: Routes = [
  { path: 'home/:username', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'home/:username/:type', component: HomeComponent },
];
