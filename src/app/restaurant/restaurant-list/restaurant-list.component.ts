import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Restaurant } from '../model/restaurant';
import { RestaurantList } from '../model/restaurant-list';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

	@Input() restoranList :Restaurant[];



  constructor() {
  }

  ngOnInit() {
  }

}
