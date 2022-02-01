import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {
    path:':id',
    component: InfoComponent
  },

  {
    path:'',
    component: MoviesComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class MoviesRoutingModule { }
