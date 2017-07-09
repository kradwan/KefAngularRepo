import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsImgComponent } from './user-details-img.component';

describe('UserDetailsImgComponent', () => {
  let component: UserDetailsImgComponent;
  let fixture: ComponentFixture<UserDetailsImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
