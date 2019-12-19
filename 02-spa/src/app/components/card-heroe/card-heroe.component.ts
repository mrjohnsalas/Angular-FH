import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;
  @Output() hereoSelect: EventEmitter<number>;

  constructor(private router: Router) { 
    this.hereoSelect = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.hereoSelect.emit(this.index);
  }

}
