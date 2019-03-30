import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Restaurant } from '../model/restaurant';
import { RestaurantList } from '../model/restaurant-list';
import { Menu } from '../model/menu';
import { MenuList } from '../model/menu-list';

const url = "http://localhost:3000/api/restaurants";

@Injectable({
  providedIn: 'root'
})
export class ResService {

  constructor(private http :HttpClient) { }

  getAll(newParams? :any): Observable<RestaurantList>{
  	let queryParams = {};
    if(newParams){
      // let filter = {}
      // filter['priceFrom'] = newParams.filter && newParams.filter.priceFrom && newParams.filter.priceFrom.toString() || '1';
      // filter['priceTo'] = newParams.filter && newParams.filter.priceTo && newParams.filter.priceTo.toString() || '5';
      // filter['cuisine'] = newParams.filter && newParams.filter.cuisine && newParams.filter.cuisine.toString() || '';
      queryParams = {
        params : new HttpParams()
          .set("sort", newParams.sort || "rating")
          .set("sortDirection", newParams.sortDirection || "desc")
          .set("page", newParams.page && newParams.page.toString() || "1")
          .set("pageSize", newParams.page && newParams.pageSize.toString() || "12")
          .set("filter", newParams.filter && JSON.stringify(newParams.filter) || "")
      }
    }
  	return this.http.get(url, queryParams).pipe(map(res => new RestaurantList(res)));
  }

  getMeni(id :number): Observable<MenuList>{
    return this.http.get(url + "/" + id + "/menus").pipe(map(res => new MenuList(res)));
  }

  getRestaurant(cuisine :string):Observable<RestaurantList>{
    return this.http.get(url + "/" + cuisine).pipe(map(res => new RestaurantList(res)));
  }
}
