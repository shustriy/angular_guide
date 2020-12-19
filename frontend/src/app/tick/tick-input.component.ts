import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tick-input',
  template: '<h1>TickInput: {{tick}}</h1>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickInputComponent implements OnInit {

  @Input() tick: number = 111;

  ngOnInit() {
    console.log('OnInit TickInputComponent');
    
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
