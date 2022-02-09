import { createAction, props } from "@ngrx/store";
import { MovieAPI } from "src/app/models/movieAPI.model";

export const cartAddMovie = createAction(
  'Cart - Add movie from cart',
  props<{ movie: MovieAPI }>()
);

export const cartDeleteMovie = createAction(
  'Cart - Delete from cart',
  props<{ movie: MovieAPI }>()
);

export const cartClear = createAction(
  'Cart - Clear Cart',
);

export const cartSetContent = createAction(
  'Cart - Set cart content',
  props<{ status: string, movies: MovieAPI[] }>()
)
