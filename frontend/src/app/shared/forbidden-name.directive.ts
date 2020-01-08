import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {AbstractControl, Validator, ValidatorFn, Validators, NG_VALIDATORS, ValidationErrors} from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    console.log('forbiddenNameValidator', forbidden);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  }
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }
}
