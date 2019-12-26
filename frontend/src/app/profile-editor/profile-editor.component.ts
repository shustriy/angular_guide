import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit(event) {
    console.warn(this.profileForm.value);
    console.log('event', event);
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

}
