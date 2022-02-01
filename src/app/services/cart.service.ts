import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MovieService } from '../features/movies/services/movie.service';
import { MovieAPI } from '../models/movieAPI.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private listMovie: MovieAPI[] = [];
  urlCart = environment.urlLocalCart;

  constructor(
    private movieService: MovieService,
    private httpClient: HttpClient
  ) { }

  getCart(): Observable<MovieAPI[]> {
    return this.httpClient.get<MovieAPI[]>(`${this.urlCart}`);
  }

  addMovie(movie: MovieAPI): Observable<any> {
    return this.httpClient.post<any>(this.urlCart, movie)
  }

  clearCart(): Observable<MovieAPI[]> {
    return this.httpClient.delete<MovieAPI[]>(`${this.urlCart}/clear`);
  }

  removeMovie(movie: MovieAPI): Observable<any> {
    return this.httpClient.delete<any>(`${this.urlCart}/?id=${movie.id}`)
  }
}
