import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamical-add-validator',
  templateUrl: './dynamical-add-validator.component.html',
  styleUrls: ['./dynamical-add-validator.component.scss']
})
export class DynamicalAddValidatorComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'optionA': new FormControl('', []),
      'optionB': new FormControl('', []),
      'optionBExtra': new FormControl('', [Validators.required]),
    });

    this.optionB.valueChanges.subscribe(checked => {
      if (checked) {
        this.optionBExtra.setValidators([Validators.required, Validators.minLength(5)]);
      } else {
        this.optionBExtra.setValue(null);
        this.optionBExtra.setValidators(null);
      }
      this.optionBExtra.updateValueAndValidity();
    });
  }

  public get optionBExtra(): FormControl {
    return this.form.get('optionBExtra') as FormControl;
  }

  public get optionB(): FormControl {
    return this.form.get('optionB') as FormControl;
  }

}
