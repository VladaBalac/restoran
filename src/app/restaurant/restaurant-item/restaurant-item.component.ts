import { Component, OnInit, Input } from '@angular/core';

import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Restaurant } from '../model/restaurant';
import { RestaurantModalComponent } from '../restaurant-modal/restaurant-modal.component';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

 	@Input() restoran :Restaurant;

  constructor(private moadl: NgbModal) { }

  ngOnInit() {
  }

  otvoriModal(restaurant){
  	const moadalR = this.moadl.open(RestaurantModalComponent);
  	moadalR.componentInstance.restoran = restaurant;
  }

}
