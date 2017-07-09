import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListPagintationImgComponent } from './users-list-pagintation-img.component';

describe('UsersListPagintationImgComponent', () => {
  let component: UsersListPagintationImgComponent;
  let fixture: ComponentFixture<UsersListPagintationImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListPagintationImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListPagintationImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
