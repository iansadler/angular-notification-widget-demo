import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, Subscription, interval } from 'rxjs';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [FlexLayoutModule, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  count = 0;
  myInterval: Observable<any>;
  timerSubscription?: Subscription;
  isTimerRunning = false;

  constructor() {
    this.myInterval = interval(300);
  }

  startTimer() {
    this.isTimerRunning = true;
    this.timerSubscription = this.myInterval.subscribe(() => {
      this.count++;
    });
  }

  stopTimer() {
    this.isTimerRunning = false;
    this.timerSubscription?.unsubscribe();
  }

  clearCount() {
    this.count = 0;
  }
}
