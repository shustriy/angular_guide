import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";

export interface BooleanFn {
  (): boolean;
}

function emailConditionallyRequiredValidator(formControl: AbstractControl) {
  if (!formControl.parent) {
    return null;
  }

  if (formControl.parent.get('accountCheckedEmail').value) {
    return Validators.required(formControl);
  }
  return null;
}

function conditionalValidator(predicate: BooleanFn,
                              validator: ValidatorFn,
                              errorNamespace?: string): ValidatorFn {
  return (formControl => {
    if (!formControl.parent) {
      return null;
    }
    let error = null;
    if (predicate()) {
      error = validator(formControl);
    }
    if (errorNamespace && error) {
      const customError = {};
      customError[errorNamespace] = error;
      error = customError
    }
    return error;
  })
}

@Component({
  selector: 'app-custom-email-validator',
  templateUrl: './custom-email-validator.component.html',
  styleUrls: ['./custom-email-validator.component.scss']
})
export class CustomEmailValidatorComponent implements OnInit {

  private accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      accountCheckedEmail: [true],
      accountEmail: ['', [
        Validators.maxLength(250),
        Validators.minLength(5),
        Validators.pattern(/.+@.+\..+/),
        conditionalValidator(() => this.accountForm.get('accountCheckedEmail').value,
          Validators.required, 'conditionalValidatorError')
      ]]
    });

    this.accountForm.get('accountCheckedEmail').valueChanges
      .subscribe(() => this.accountForm.get('accountEmail').updateValueAndValidity());
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.accountForm);
    console.log(this.accountForm.get('accountEmail'));
  }
}
