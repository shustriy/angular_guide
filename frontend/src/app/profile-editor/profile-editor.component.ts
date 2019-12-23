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
    lastName: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit(event) {
    console.warn(this.profileForm.value);
    console.log('event', event);
  }

}
