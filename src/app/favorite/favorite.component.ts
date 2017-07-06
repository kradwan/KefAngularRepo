import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //shadows styles, emulated for old browsers
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit(
      { newValue: this.isSelected }
    );
  }
  ngOnInit() {
  }

}

export interface FavoritChangedEventArgs{
  newValue: boolean;
}