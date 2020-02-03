import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

function emailConditionallyRequiredValidator(formControl: AbstractControl) {
  if (!formControl.parent) {
    return null;
  }

  if (formControl.parent.get('accountCheckedEmail').value) {
    return Validators.required(formControl);
  }
  return null;
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
        emailConditionallyRequiredValidator
      ]]
    });


    this.accountForm.get('accountCheckedEmail').valueChanges
      .subscribe(() => this.accountForm.get('accountEmail').updateValueAndValidity());
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.accountForm);
  }
}
