import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableControlComponent } from './disable-control.component';

describe('DisableControlComponent', () => {
  let component: DisableControlComponent;
  let fixture: ComponentFixture<DisableControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
