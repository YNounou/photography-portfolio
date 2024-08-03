export interface CounterState {
  counter: number;
}
  
// Define the shape of the application state
export interface AppState {
  counterState: CounterState;
}
