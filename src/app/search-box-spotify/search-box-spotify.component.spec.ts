import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxSpotifyComponent } from './search-box-spotify.component';

describe('SearchBoxSpotifyComponent', () => {
  let component: SearchBoxSpotifyComponent;
  let fixture: ComponentFixture<SearchBoxSpotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxSpotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
