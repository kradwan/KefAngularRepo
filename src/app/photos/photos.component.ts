import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[];

  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(response => {
        this.photos = response.json();
      });
  }

  ngOnInit() {
  }

}
