import { createAction } from "@ngrx/store";

export const increment = createAction('[test] Increment');
export const decrement = createAction('[test] Decrement');
export const reset = createAction('[test] Reset');
export const plusFive = createAction('[test] plusFive');