import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { environment } from 'src/environments/environment.prod';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {


  private subscriptionsMovies = new Subscription;

  moviesAPI: MovieAPI[] = [];
  urlPath: string = environment.urlPathImage;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private store: Store
  ) { }


  ngOnInit(): void {

    this.subscriptionsMovies?.add(
      this.movieService.getListAPI().subscribe(response => {
        this.moviesAPI = response

      }, (err) => {
        console.log("Faltal Error")
        console.log(err);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionsMovies?.unsubscribe();
  }

  navigateToDetail(id: number) {
    this.router.navigate(['cartelera', id]);
  }
}
