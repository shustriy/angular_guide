import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicalEmailValidatorComponent } from './dynamical-email-validator.component';

describe('DynamicalEmailValidatorComponent', () => {
  let component: DynamicalEmailValidatorComponent;
  let fixture: ComponentFixture<DynamicalEmailValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicalEmailValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicalEmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
