import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.scss']
})
export class HeroFormTemplateComponent implements OnInit {

  public hero: Hero = new Hero(18, 'Dr IQ', '', 'Chuck Overstreet');

  constructor() { }

  ngOnInit() {
  }

}
