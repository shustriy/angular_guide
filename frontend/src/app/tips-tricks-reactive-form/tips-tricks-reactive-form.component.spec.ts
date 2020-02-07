import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsTricksReactiveFormComponent } from './tips-tricks-reactive-form.component';

describe('TipsTricksReactiveFormComponent', () => {
  let component: TipsTricksReactiveFormComponent;
  let fixture: ComponentFixture<TipsTricksReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsTricksReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsTricksReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
