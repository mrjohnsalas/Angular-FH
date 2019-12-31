import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];
  
  constructor(private router: Router) { }

  getArtist(artist: any) {
    let artistId;
    if (artist.type === 'artist') {
      artistId = artist.id;
    } else {
      artistId = artist.artists[0].id;
    }

    this.router.navigate(['/artist', artistId]);
  }

  ngOnInit() {
  }

}
