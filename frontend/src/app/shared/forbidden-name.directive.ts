import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, Validator, ValidatorFn, Validators, NG_VALIDATORS } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  }
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    console.log('validate ForbiddenValidatorDirective', control);
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }
}
