import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tick-parent',
  template: 'TickParentComponent: <app-tick></app-tick>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickParentComponent implements OnInit {

  ngOnInit() {
    console.log('OnInit TickParentComponent');
  }

  constructor(private ref: ChangeDetectorRef) {
    // const callback = () => {
    //   this.numberOfTicks++;
    //   // this.ref.markForCheck();
    //   setTimeout(callback, 1000);
    // };

    // callback();

    // setInterval(() => {
    //   this.numberOfTicks++;
    //   this.ref.markForCheck();
    // }, 1000);
  }
}
