import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './Menu/menu.component';
import { ArtistNavbarComponent } from './Navbars/artist-navbar/artist-navbar.component';
import { ArtistListComponent } from './Lists/artist-list/artist-list.component';
import { ArtistComponent } from './Objects/artist/artist.component';
import { HttpClient } from '@angular/common/http';
import { MainComponent } from './Main/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SongListComponent } from './Lists/song-list/song-list.component';
import { SongComponent } from './Objects/song/song.component';
import { AlbumNavbarComponent } from './Navbars/album-navbar/album-navbar.component';
import { AlbumListComponent } from './Lists/album-list/album-list.component';
import { AlbumComponent } from './Objects/album/album.component';
import { SpotifyService } from './spotify.service';
import { ConnexionComponent } from './Connexion/connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { routes } from './Routing/app-routing/app-routing.module';
import { HomeComponent } from './Home/home/home.component';
import { BoldPipe } from './bold.pipe';
import { PlaylistComponent } from './Playlist/playlist/playlist.component';
import { PlaylistNameComponent } from './Playlist/playlist-name/playlist-name.component';
import { PlaylistSongsComponent } from './Playlist/playlist-songs/playlist-songs.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    ArtistNavbarComponent,
    ArtistListComponent,
    MainComponent,
    ArtistComponent,
    SongListComponent,
    SongComponent,
    AlbumNavbarComponent,
    AlbumListComponent,
    AlbumComponent,
    ConnexionComponent,
    HomeComponent,
    BoldPipe,
    PlaylistComponent,
    PlaylistNameComponent,
    PlaylistSongsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
