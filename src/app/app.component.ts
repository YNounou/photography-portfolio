import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Observable } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { decrement, increment, reset } from './NgRx/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private store = inject(Store);

  title = 'photography-portfolio';
  count$?: Observable<number>;

  constructor() {
    this.count$ = this.store.select('counter');
  }

  /**
   * Increment the counter value in the store.
   * Dispatches the increment action to the store.
   */
  increment() {
    this.store.dispatch(increment());
  }

  /**
   * Decrement the counter value in the store.
   * Dispatches the decrement action to the store.
   */
  decrement() {
    this.store.dispatch(decrement());
  }

  /**
   * Reset the counter value in the store.
   * Dispatches the reset action to the store.
   */
  reset() {
    this.store.dispatch(reset());
  }
}
