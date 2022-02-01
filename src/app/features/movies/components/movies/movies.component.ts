import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { userDisplaySelector } from 'src/app/store/menu-user.selectors';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy, AfterViewInit {

  private subcripcionMovie: Subscription | undefined;
   moviesAPI : MovieAPI[] =[];
   urlPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private movieService: MovieService,
    private router: Router,
    private store : Store
  ) { }

  ngOnInit(): void {
    console.log("Movies On Init - Status OK");

    this.subcripcionMovie = this.movieService.getListAPI().subscribe(response => {
        this.moviesAPI = response
        console.log(this.store.pipe(
          select(userDisplaySelector)));
    });
  }

  ngAfterViewInit(): void {
    console.log("Movies After View Init - Status OK");
  }

  ngOnDestroy(): void {
    this.subcripcionMovie?.unsubscribe();
    console.log("Movies On Destroy - Status OK");
  }

  navigateToDetail(id: number) {
    this.router.navigate(['cartelera', id]);
  }
}
