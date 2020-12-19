import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TickComponent } from './tick.component';
import { TickParentComponent } from './tick-parent.component';
import { TickInputComponent } from './tick-input.component';

@NgModule({
  declarations: [
    TickComponent,
    TickParentComponent,
    TickInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TickComponent,
    TickParentComponent
  ],
  providers: [],
})
export class TickModule { }
