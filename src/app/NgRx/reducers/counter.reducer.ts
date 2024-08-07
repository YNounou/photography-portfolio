import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../counter.actions";
import { CounterState } from "../test.state";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state > 0 ? state - 1 : state),
    on(reset, (state) => 0),
)
