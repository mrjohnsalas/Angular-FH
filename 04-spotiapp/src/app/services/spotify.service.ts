import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDLgSGKrObB2iQnTXDntM2QdUxlv_FyOQEVTbi8ULXkpn4TaJSvwhmLcnD5OdYeDELgfXSnnPPm1Viw9T0';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe( map (data => data['albums'].items ));
  }

  getArtists(search: string) {
    return this.getQuery(`search?q=${search}&type=artist&limit=20`).pipe( map (data => data['artists'].items ));
  }

  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-track`);
  }
}
