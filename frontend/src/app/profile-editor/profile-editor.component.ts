import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required]],
    address: this.fb.group({
      street:  [''],
      city:  [''],
      state:  [''],
      zip:  this.fb.control('1235')
    }),
    aliases: this.fb.array([
      [{value: '11', disabled: true}]
    ])
  });

  constructor(private fb: FormBuilder ) {
  }

  ngOnInit() {
  }

  public onSubmit(event) {
    console.warn(this.profileForm.value);
    console.warn('getRawValue', this.profileForm.getRawValue());
  }

  public updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  public updateAddress() {
    this.profileForm.get('address').setValue({
      street: '451 Drew Street',
      city: 'New-York',
      state: '',
      zip: ''
    });
  }

  public get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control('', [Validators.required]));
  }

}
