import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adm-movie-list',
  templateUrl: './adm-movie-list.component.html',
  styleUrls: ['./adm-movie-list.component.scss']
})
export class AdmMovieListComponent implements OnInit, AfterViewInit {
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  idValue = 0;

  movies: MovieAPI[] = [];
  emptyMovie: MovieAPI = {
    title: 'Agregar titulo',
    poster_path: '/endpoint',
    adult: false,
    backdrop_path: '',
    id: 0,
    genre_ids: [],
    original_language: '',
    original_title: '',
    overview: 'Agregar descripcion',
    popularity: 0,
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };

  selectedMovie: MovieAPI = {
    adult: false,
    backdrop_path: '',
    id: 0,
    genre_ids: [],
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };

  movieEditForm = new FormGroup({
    title: new FormControl('-', [Validators.required]),
    poster_path: new FormControl('-', [Validators.required]),
    vote_average: new FormControl('-', [Validators.required]),
    release_date: new FormControl('-', [Validators.required]),
    overview: new FormControl('-', [Validators.required]),
  });

  titleControl = this.movieEditForm.controls['title'];
  poster_pathControl = this.movieEditForm.controls['poster_path'];
  vote_averageControl = this.movieEditForm.controls['vote_average'];
  release_dateControl = this.movieEditForm.controls['release_date'];
  overviewControl = this.movieEditForm.controls['overview'];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService.getListAPI().subscribe(response => {
      this.movies = response
    });
  }

  ngAfterViewInit(): void {
  }

  clickMovie(movie: MovieAPI) {
    this.selectedMovie.id = movie.id
    this.idValue = movie.id;
    this.movieEditForm.controls['title'].setValue(movie.title);
    this.movieEditForm.controls['poster_path'].setValue(movie.poster_path);
    this.movieEditForm.controls['vote_average'].setValue(movie.vote_average);
    this.movieEditForm.controls['release_date'].setValue(movie.release_date);
    this.movieEditForm.controls['overview'].setValue(movie.overview)
  }

  newMovie() {
    this.idValue = this.emptyMovie.id;
    this.movieEditForm.controls['title'].setValue(this.emptyMovie.title)
    this.movieEditForm.controls['poster_path'].setValue(this.emptyMovie.poster_path)
    this.movieEditForm.controls['vote_average'].setValue(this.emptyMovie.vote_average)
    this.movieEditForm.controls['release_date'].setValue(this.emptyMovie.release_date)
    this.movieEditForm.controls['overview'].setValue(this.emptyMovie.overview)
  }

  isSelected(movie: MovieAPI): boolean {
    return (movie.id === this.selectedMovie.id);
  }

  addMovie() {
    let newMovie: MovieAPI = {
      adult: false,
      backdrop_path: '',
      id: 0,
      genre_ids: [],
      original_language: '',
      original_title: '',
      overview:  this.movieEditForm.controls['overview'].value,
      popularity: 0,
      poster_path:   this.movieEditForm.controls['poster_path'].value,
      release_date: this.movieEditForm.controls['release_date'].value,
      title:  this.movieEditForm.controls['title'].value,
      video: false,
      vote_average:  this.movieEditForm.controls['vote_average'].value,
      vote_count: 0
    }

    this.movieService.addMovie(newMovie).subscribe(response => {
      this.movieService.getListAPI().subscribe(response => {
      this.movies = response });
    });
  }

  deleteMovie() {
    this.movieService.removeMovie(this.idValue).subscribe(response =>{
      this.movieService.getListAPI().subscribe(response => {
        this.movies = response });
        Swal.fire("PELICULA ELIMINADA", "La pelicula ha sido eliminada de la cartelera", "success");
    });
  }

  updateMovie(){
    let updateMovie: MovieAPI = {
      adult: false,
      backdrop_path: '',
      id: this.idValue,
      genre_ids: [],
      original_language: '',
      original_title: '',
      overview:  this.movieEditForm.controls['overview'].value,
      popularity: 0,
      poster_path:   this.movieEditForm.controls['poster_path'].value,
      release_date: this.movieEditForm.controls['release_date'].value,
      title:  this.movieEditForm.controls['title'].value,
      video: false,
      vote_average:  this.movieEditForm.controls['vote_average'].value,
      vote_count: 0
    }

    this.movieService.updateMovie(updateMovie).subscribe(response => {
        this.movieService.getListAPI().subscribe(response => {
          this.movies = response });
          Swal.fire("PELICULA MODIFICADA", "La pelicula seleccionada ha sido modificada", "info");
    });
  }
}
