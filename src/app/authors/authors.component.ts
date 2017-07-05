import { AuthorsService } from './../../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private _authors : any[] = [];
  private _title;

  constructor(private _authorsService : AuthorsService) { 
      console.log(_authorsService.getAll());
      this._authors = _authorsService.getAll();
      this._title = `${this._authors.length>1? this._authors.length+" Authors":"Author"}`;      
  }

  ngOnInit() {
  }

}
