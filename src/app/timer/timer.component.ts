import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent{
  minutesLeft: number = 25;
  secondsLeft: any = "00";
  placeholder: string = "0";
  // timeLeft: number = Math.floor(1500 * 1.66667);
  minutesInterval: any;
  secondsInterval: any;

  startTimer(): void{

    this.minutesLeft = 24
    this.secondsLeft = 59

    this.minutesInterval = setInterval(() => {
      this.minutesLeft = this.minutesLeft - 1; 
    }, 60000);
    this.secondsInterval = setInterval(() => {
      this.secondsLeft--;
      if(this.secondsLeft < 10){
        this.secondsLeft = this.placeholder + this.secondsLeft;
      }
      if(this.secondsLeft <= 0 ) {
        if(this.minutesLeft <= 0) {
          clearInterval(this.minutesInterval);
          clearInterval(this.secondsInterval);
        } else {
          this.secondsLeft = 59;
        }
      } 
    }, 1000);

}

  pauseTimer(): void {
    clearInterval(this.minutesInterval);
    clearInterval(this.secondsInterval);

  }

  resetTimer(): void{
    this.minutesLeft = 25;
    this.secondsLeft = "00";
  }
}