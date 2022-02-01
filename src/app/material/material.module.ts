import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../features/movies/services/movie.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],

  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

  ],

  providers: [
    MovieService
  ],

})
export class MaterialModule { }
