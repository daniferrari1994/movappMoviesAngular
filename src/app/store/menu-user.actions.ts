import { createAction, props } from "@ngrx/store";

export const userDiplay = createAction(
  'Application Set Title',
  props<{username:string,role: string}>()
);

export const userClear = createAction(
  ' Clear data',
)
