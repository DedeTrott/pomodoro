import { Component } from '@angular/core';

@Component({
  selector: 'app-short-break',
  templateUrl: './short-break.component.html',
  styleUrls: ['./short-break.component.sass']
})
export class ShortBreakComponent {

  private time = 5;
  private get timerStartValue() {
    return this.time * 60; // seconds
  }
  private timerRemaining = this.timerStartValue;
  private interval: any;
  startButtonDisabled = false;
  stopButtonDisabled = true;

  startTimer() {
    this.playSound();
    this.startButtonDisabled = true;
    this.interval = setInterval(() => {
      if (this.timerRemaining > 0) {
        this.timerRemaining--;
        if (this.timerRemaining == 0) {
          this.playGong();
        }
      }
    }, 1000)
    this.stopButtonDisabled = false;
  }

  pauseTimer() {
    this.startButtonDisabled = false;
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
