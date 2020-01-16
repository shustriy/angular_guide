import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicalAddValidatorComponent } from './dynamical-add-validator.component';

describe('DynamicalAddValidatorComponent', () => {
  let component: DynamicalAddValidatorComponent;
  let fixture: ComponentFixture<DynamicalAddValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicalAddValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicalAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
