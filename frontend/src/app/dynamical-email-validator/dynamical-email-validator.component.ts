import { Component, OnInit } from '@angular/core';
import {AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamical-email-validator',
  templateUrl: './dynamical-email-validator.component.html',
  styleUrls: ['./dynamical-email-validator.component.scss']
})
export class DynamicalEmailValidatorComponent implements OnInit {

  private accountForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  public get accountEmail() {
    return this.accountForm.get('accountEmail') as FormControl;
  }

  ngOnInit() {
    this.accountForm = this.fb.group({
      accountCheckedEmail: [true],
      accountEmail: ['', [
        Validators.required,
        Validators.maxLength(250),
        Validators.minLength(5),
        Validators.pattern(/.+@.+\..+/)
      ]]
    });
  }

  onSubmit() {
    console.log(this.accountForm.value);
  }

}
