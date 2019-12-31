import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtist(params.id);
    });
  }

  ngOnInit() {
  }

  getArtist(artistId: string) {
    this.loading = true;
    this.spotifyService.getArtist(artistId).subscribe( art => {
      this.artist = art;
      this.loading = false;
    });
  }

}
