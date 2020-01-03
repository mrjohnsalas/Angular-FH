import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error = false;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      this.newSongs = data;
      this.loading = false;
    }, (serviceError) => {
      this.error = true;
      this.loading = false;
      this.errorMessage = serviceError.error.error.message;
    });
  }

  ngOnInit() {
  }

}
