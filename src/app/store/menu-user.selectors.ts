import { createSelector } from "@ngrx/store";
import { userState } from "./user-state.model";



export const userSelector = (state: any) => state.app;

export const userDisplaySelector = createSelector(
  userSelector,
  (state: userState) => state
)
