import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import {debounceTime} from "rxjs/operators";

function dummyValidator(control: FormControl) {
  console.log('checking...')
  return null;
}

@Component({
  selector: 'app-tips-tricks-reactive-form',
  templateUrl: './tips-tricks-reactive-form.component.html',
  styleUrls: ['./tips-tricks-reactive-form.component.scss']
})
export class TipsTricksReactiveFormComponent implements OnInit {

  public profileForm = new FormGroup({
    firstName: new FormControl('', {
      validators: dummyValidator,
      updateOn: 'blur'
    }),
    lastName: new FormControl('', [Validators.minLength(5)]),
  });

  constructor() { }

  ngOnInit() {
    this.firstName.valueChanges.subscribe(value => console.log('firstName ValueChanges', value));
    // this.lastName.valueChanges.pipe(
    //   debounceTime(300)
    // ).subscribe(value => {
    //   console.log('lastName ValueChanges', value)
    //   const errors: ValidationErrors | null = Validators.minLength(5)(this.lastName);
    //   this.lastName.setErrors(errors);
    // });
  }

  updateFirstName() {
    this.firstName.setValue('Test');
  }

  updateLastName() {
    this.lastName.patchValue('Val', { onlySelf: true })
  }

  onSubmit() {
    console.log(this.profileForm);
  }

  public get firstName(): FormControl {
    return this.profileForm.get('firstName') as FormControl;
  }

  public get lastName(): FormControl {
    return this.profileForm.get('lastName') as FormControl;
  }


}
