import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../core/home/home.component';
import { RestaurantsComponent } from '../restaurant/restaurants/restaurants.component';
import { AboutComponent } from '../core/about/about.component';

export const route : Routes = [
{path:'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'restaurant/:cuisine', component: RestaurantsComponent},
{path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],

  exports:[
  RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
