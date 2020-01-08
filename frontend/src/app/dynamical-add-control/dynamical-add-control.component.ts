import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamical-add-control',
  templateUrl: './dynamical-add-control.component.html',
  styleUrls: ['./dynamical-add-control.component.scss']
})
export class DynamicalAddControlComponent implements OnInit {

  public form: FormGroup;

  constructor() { }


  ngOnInit() {
    this.form = new FormGroup({
      optionA: new FormControl(false),
      optionB: new FormControl(false)
    });

    this.optionB.valueChanges.subscribe(checked => {
      if (checked) {
        const validators = [ Validators.required, Validators.minLength(5) ];
        this.form.addControl('optionBExtra', new FormControl('', validators));
      } else {
        this.form.removeControl('optionBExtra');
      }
      this.form.updateValueAndValidity();
    });
  }

  get optionB() {
    return this.form.get('optionB') as FormControl;
  }

  get optionBExtra() {
    return this.form.get('optionBExtra') as FormControl;
  }

}
