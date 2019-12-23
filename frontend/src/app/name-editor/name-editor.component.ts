import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  public name = new FormControl('',  [
      Validators.required,
      Validators.minLength(4),
    ]);

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit', this.name);
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
