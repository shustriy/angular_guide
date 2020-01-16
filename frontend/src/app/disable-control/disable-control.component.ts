import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-disable-control',
  templateUrl: './disable-control.component.html',
  styleUrls: ['./disable-control.component.scss']
})
export class DisableControlComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'optionA': new FormControl('', []),
      'optionB': new FormControl('', []),
      'optionBExtra': new FormControl({disabled: true, value: ''}, [Validators.required])
    });

    this.optionB.valueChanges.subscribe((checked: Boolean) =>
      checked ? this.optionBExtra.enable() : this.optionBExtra.disable());
  }

  public get optionBExtra(): FormControl {
    return this.form.get('optionBExtra') as FormControl;
  }

  public get optionB(): FormControl {
    return this.form.get('optionB') as FormControl;
  }

}
