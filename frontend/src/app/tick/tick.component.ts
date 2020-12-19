import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickComponent implements OnInit {
  public numberOfTicks: number = 0;

  ngOnInit() {
    console.log('OnInit TickComponent', this.numberOfTicks);
  }

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      this.ref.markForCheck();
    }, 1000);
  }
}
