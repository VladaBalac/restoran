import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../model/restaurant';
import { Menu } from '../model/menu';
import { ResService } from '../service/res.service';

@Component({
  selector: 'app-restaurant-modal',
  templateUrl: './restaurant-modal.component.html',
  styleUrls: ['./restaurant-modal.component.css']
})
export class RestaurantModalComponent implements OnInit {

	@Input() restoran :Restaurant;
	menu :Menu;

  constructor(private servis :ResService) { }

  ngOnInit() {
  	this.servis.getMeni(this.restoran._id).subscribe(res => {
  		this.menu = res.results[0];
  	});
  }

}
