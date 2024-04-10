import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TimerComponent } from './app/timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerComponent],
  template: '<app-timer></app-timer>',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
