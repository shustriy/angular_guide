import { Component, OnInit } from '@angular/core';
import {AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-dynamical-email-validator',
  templateUrl: './dynamical-email-validator.component.html',
  styleUrls: ['./dynamical-email-validator.component.scss']
})
export class DynamicalEmailValidatorComponent implements OnInit {

  private accountForm: FormGroup;
  private accountEmailValidators: ValidatorFn[] = [
    Validators.maxLength(250),
    Validators.minLength(5),
    Validators.pattern(/.+@.+\..+/)
  ];

  constructor(private fb: FormBuilder) { }

  public get accountEmail() {
    return this.accountForm.get('accountEmail') as FormControl;
  }

  public get accountCheckedEmail() {
    return this.accountForm.get('accountCheckedEmail') as FormControl;
  }

  ngOnInit() {
    this.accountForm = this.fb.group({
      accountCheckedEmail: [true],
      accountEmail: ['']
    });

    this.accountCheckedEmail.valueChanges.subscribe(value => {
      if (value) {
        this.accountEmail.setValidators(this.accountEmailValidators.concat([Validators.required]));
      } else {
        this.accountEmail.clearValidators();
      }
      this.accountEmail.updateValueAndValidity();
    });
  }

  onSubmit() {
    console.log(this.accountForm.value);
  }

}
