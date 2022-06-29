import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBreakComponent } from './short-break.component';

describe('ShortBreakComponent', () => {
  let component: ShortBreakComponent;
  let fixture: ComponentFixture<ShortBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBreakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
