import { Component, OnInit } from '@angular/core';
import {AbstractControl, AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';

const emailValidators: {[key: string]: ValidatorFn} = {
  maxLength: Validators.maxLength(7),
  minLength: Validators.minLength(5),
  pattern: Validators.pattern(/.+@.+\..+/),
  required: Validators.required
};

const emailValidatorsErrors: {[key: string]: boolean} = {
  maxLength: true,
  minLength: true,
  pattern: true,
  required: true
};

const checkIfValid = (field: FormControl): ValidationErrors | null => {
  let errors: {} = {};
  for (let key in emailValidators) {
    if (emailValidators[key](field)) {
      errors = {...errors, [key]: emailValidatorsErrors[key]}
      console.log('errors', errors);
    }
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return null;
}

const emailConditionallyRequiredValidator = (formGroup: FormGroup) => {
  console.log('emailConditionallyRequiredValidator', formGroup);
  if (formGroup.value.accountCheckedEmail) {
    // return Validators.required(formGroup.get('accountEmail')) ? {
    //   required: true,
    // } : null;
    return checkIfValid(formGroup.get('accountEmail') as FormControl);
  }
  return null;
}

@Component({
  selector: 'app-condition-group-email-validator',
  templateUrl: './condition-group-email-validator.component.html',
  styleUrls: ['./condition-group-email-validator.component.scss']
})
export class ConditionGroupEmailValidatorComponent implements OnInit {

  private accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      accountCheckedEmail: [true],
      accountEmail: ['', [
        Validators.maxLength(250),
        Validators.minLength(5),
        Validators.pattern(/.+@.+\..+/)
      ]]
    }, {
      validators: [emailConditionallyRequiredValidator]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.accountForm.value);
  }

}
