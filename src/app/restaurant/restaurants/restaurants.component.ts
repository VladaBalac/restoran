import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResService } from '../service/res.service';

import { Restaurant } from '../model/restaurant';
import { RestaurantList } from '../model/restaurant-list';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

	private restaurant :Restaurant[];
	private count :number;
	private parametri = {
		sort:'rating',
		sortDirection:'desc',
		page:1,
		pageSize:12,
		filter: {
			cuisine:'',
			priceFrom:'1',
			priceTo:'5'
		}
	}

  constructor(private servis :ResService, private route: ActivatedRoute) { }

  refresh(params?){
  	// if(params) {
   //    let cuisine = this.route.snapshot.paramMap.get('cuisine');
   //    if(!params.filter) {
   //      params.filter = {};
   //    }
   //    cuisine == 'all' ? params.filter.cuisine = '' : params.filter.cuisine = cuisine;
      this.servis.getAll(params).subscribe(restoran => {
  		this.count = restoran.count;
  		this.restaurant = restoran.results;
  	})
    
  	// let cuisine :string = this.route.snapshot.paramMap.get('cuisine');
  	// if(cuisine){
  	// 	this.servis.getRestaurant(cuisine).subscribe(res => {
  	// 		this.restaurant = res.results
  	// 	});
  	// }
  	
  }



  ngOnInit() {
  	this.refresh();
  	this.route.params.subscribe( params => {
      if(params['cuisine'] == 'all') {
        this.refresh({"filter": {"cuisine": ''}});
      } else {
        this.refresh({"filter": {"cuisine": params['cuisine']}});
      }
    });

  	// this.route.params.subscribe( params => {
  	// 	if(params['cuisine'] == 'all'){
  	// 		this.parametri = {filter: {cuisine:'', priceFrom:'', priceTo:''}};
  	// 	}
  	// })
  }

  changePage(page :number){
  	this.parametri.page = page;
  	this.refresh();
  }

  // updateRestorant(params?){
  // 	if(params){
  // 		let cuisine = this.route.snapshot.paramMap.get('cuisine');
  // 		if(!params.filter){
  // 			params.filter = {};
  // 		}
  // 		cuisine == "all" ? params.filter.cuisine = '' : params.filter.cuisine = cuisine;
  // 		this.servis.getAll(params).subscribe(res => this.restaurant = res.results);
  // 	}
  // }

}
