import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonWidgetsComponent } from './common-widgets.component';

describe('CommonWidgetsComponent', () => {
  let component: CommonWidgetsComponent;
  let fixture: ComponentFixture<CommonWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
