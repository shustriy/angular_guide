import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEmailValidatorComponent } from './custom-email-validator.component';

describe('CustomEmailValidatorComponent', () => {
  let component: CustomEmailValidatorComponent;
  let fixture: ComponentFixture<CustomEmailValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEmailValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEmailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
