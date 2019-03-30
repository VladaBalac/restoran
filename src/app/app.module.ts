import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';
import { PaginationComponent } from './restaurant/pagination/pagination.component';
// import { RestaurantComponent } from './restaurant/restaurant.component';
import { PriceComponent } from './restaurant/price/price.component';
import { RatingComponent } from './restaurant/rating/rating.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './restaurant/restaurant-item/restaurant-item.component';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { ResService } from './restaurant/service/res.service';
import { RestaurantModalComponent } from './restaurant/restaurant-modal/restaurant-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AboutComponent,
    HomeComponent,
    RestaurantsComponent,
    PaginationComponent,
    // RestaurantComponent,
    PriceComponent,
    RatingComponent,
    RestaurantListComponent,
    RestaurantItemComponent,
    RestaurantModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  entryComponents: [RestaurantModalComponent],
  providers: [ResService],
  bootstrap: [AppComponent]
})
export class AppModule { }
