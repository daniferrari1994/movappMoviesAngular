import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { InfoComponent } from './components/info/info.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    MoviesComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    CartModule
  ]
})
export class MoviesModule { }
