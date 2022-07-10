import { Component, Input, OnChanges, SimpleChange, SimpleChanges, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass'],
})

export class TimerComponent implements OnChanges {
  @Input() timerControlEvent: string | undefined;
  @Input() open: null | undefined;
  @Input() close: null | undefined;
  
  private timer$ = new Observable;
  private time = 25;
  private get timerStartValue() {
    return this.time * 60; // seconds
  }
  private currentTimer = 'pomodoro';
  private timerRemaining = this.timerStartValue;
  private interval: any;




  ngOnChanges(changes: SimpleChanges){
    if (changes['timerControlAction'].currentValue === 'startTimer') {
      this.startTimer();
    } else if (changes['timerControlAction'].currentValue === 'pause') {
      this.pauseTimer();
    } else if (changes['timerControlAction'].currentValue === 'restart') {
      this.resetTimer();
    } 
  }
  

  startTimer() {

    this.playSound();
    this.interval = setInterval(() => {
      if (this.timerRemaining > 0) {
        this.timerRemaining--;
        if (this.timerRemaining == 0) {
          this.playGong();
        }
      }
    }, 1000)

  }

  pauseTimer() {

    this.pauseSound();
    clearInterval(this.interval);
  }

  resetTimer() {
    this.pauseTimer();
    this.timerRemaining = this.timerStartValue;
  }

  playGong() {
    const audio = new Audio('./assets/sounds/gong.mp3');
    audio.play();
  }

  playSound() {
    const audio = new Audio('./assets/sounds/switch.mp3');
    audio.play();
  }

  pauseSound() {
    const audio = new Audio('./assets/sounds/switch-3.mp3');
    audio.play();
  }

  formatLeftTime() {
    return new Date(this.timerRemaining * 1000).toISOString().substring(14, 19); // mm:ss format
  }

}