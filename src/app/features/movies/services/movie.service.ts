import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';


@Injectable()

export class MovieService {

  moviesAPI: MovieAPI[] = [];

  private urlMockApiMovies = environment.urlMockMovies;

  constructor(private httpClient: HttpClient) {
    this.getListAPI().subscribe(response => {
      this.moviesAPI = response;
    });
  }

  getListAPI(): Observable<MovieAPI[]> {
    return this.httpClient.get<MovieAPI[]>(this.urlMockApiMovies);
  }

  getDetailAPI(id: string): Observable<MovieAPI> {
    return this.httpClient.get<MovieAPI>(`${this.urlMockApiMovies}/${id}`);
  }

  addMovie(movie: MovieAPI): Observable<MovieAPI|String> {
    if (!this.moviesAPI.find((element) => element.title === movie.title)) {

      Swal.fire("Nueva pelicula", "La pelicula ha sido ingresada correctamente", "success");
      return this.httpClient.post<MovieAPI>(this.urlMockApiMovies, movie);

    } else {

      Swal.fire("ERROR", "La pelicula ya existe en cartelera", "error");
      return of("ya existe la pelicula");
    }

  }

  updateMovie(movie: MovieAPI): Observable<MovieAPI> {
    return this.httpClient.put<MovieAPI>(`${this.urlMockApiMovies}/${movie.id}`, movie);
  }

  removeMovie(id: Number): Observable<MovieAPI> {
    return this.httpClient.delete<MovieAPI>(`${this.urlMockApiMovies}/${id}`);
  }
}
