import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      const id = params.id;
      if (id) {
        this.heroe = this.heroesService.getHeroe(id);
      }
    });
  }

  ngOnInit() {
  }

}
