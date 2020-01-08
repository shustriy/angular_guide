import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.scss']
})
export class HeroFormReactiveComponent implements OnInit {

  public heroForm: FormGroup;
  public powers: string[] = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  public hero: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  constructor() { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    },  { validators: identityRevealedValidator });
  }

  public get name() {
    console.log('name', this.heroForm.get('name'));

    return this.heroForm.get('name');
  }

  public get power() { return this.heroForm.get('power'); }
}
