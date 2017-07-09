import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSpinnerComponent } from './widget-spinner.component';

describe('WidgetSpinnerComponent', () => {
  let component: WidgetSpinnerComponent;
  let fixture: ComponentFixture<WidgetSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
