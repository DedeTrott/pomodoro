import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.sass']
})
export class TimerControlsComponent implements OnInit {
  visible = true
  @Output() timerControlEvent = new EventEmitter<string>();
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

  clickEvent(action: string | undefined) {
    this.timerControlEvent.emit(action);
  }
}
