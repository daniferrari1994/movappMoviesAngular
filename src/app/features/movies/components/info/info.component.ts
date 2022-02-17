import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CartState } from 'src/app/features/cart/store/cart-store.model';
import { cartAddMovie } from 'src/app/features/cart/store/cart.actions';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment.prod';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  movie: MovieAPI | any;
  urlPath: string = environment.urlPathImage

  private subscrptionsInfo = new Subscription;
  private movieList$!: Observable<CartState>;
  private status: string = "";
  constructor(
    private activateRoute: ActivatedRoute,
    private moviesService: MovieService,
    private cartService: CartService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.subscrptionsInfo.add(

      this.moviesService.getDetailAPI(this.activateRoute.snapshot.params['id'])
        .subscribe(respose => {
          this.movie = respose
        }
        )
    )
  }

  addMovie(movie: MovieAPI) {
    this.store.dispatch(cartAddMovie({ movie: movie }))
  }

  returnToMovies() {
    this.router.navigate(['cartelera']);
  }

}
