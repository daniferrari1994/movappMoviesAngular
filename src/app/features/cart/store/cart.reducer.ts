import { Action, createReducer, on } from "@ngrx/store";
import { CartState } from "../store/cart-store.model";
import { cartSetContent } from "./cart.actions";

export const cartInitialState: CartState = { status: "CLEAN", movies: [] }

export const _cartReducer = createReducer(

  cartInitialState,
  on(cartSetContent, (state, { status, movies }) => {

    return {
      ...state,
      status,
      movies,
    };
  })
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
