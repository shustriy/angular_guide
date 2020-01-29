import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionGroupEmailValidatorComponent } from './condition-group-email-validator.component';

describe('ConditionGroupEmailValidatorComponent', () => {
  let component: ConditionGroupEmailValidatorComponent;
  let fixture: ComponentFixture<ConditionGroupEmailValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionGroupEmailValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionGroupEmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
