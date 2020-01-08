import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.scss']
})
export class HeroFormTemplateComponent implements OnInit {

  public powers: string[] = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  public hero: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  constructor() { }

  ngOnInit() {
  }

}
