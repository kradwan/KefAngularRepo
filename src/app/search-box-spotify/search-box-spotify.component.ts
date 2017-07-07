import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'underscore';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-search-box-spotify',
  templateUrl: './search-box-spotify.component.html',
  styleUrls: ['./search-box-spotify.component.css']
})
export class SearchBoxSpotifyComponent implements OnInit, AfterViewInit {
  @Input('search-url') geturl: string;
  @ViewChild('search') el: ElementRef;
  constructor(private _elementRef: ElementRef) {
    // *** callback hell ** below
    // let debounced = _.debounce(function(text){
    //   let url = 'https://api.spotify.com/v1/search?type=artist&q=' + text;
    //     // let urlsend = (this.geturl + text) as string;
    //     // bug? cannot send it from parrent el: 'https://api.spotify.com/v1/search?type=artist&q='
    //     $.getJSON(url, function(artists){
    //       console.log(artists);
    //     });
    // }, 400);

    // $( document ).ready(function() {
    //   console.log( 'ready!' );
    //     $('#search').keyup(function(e){
    //     let text: string = (<HTMLInputElement>e.target).value;
    //     // text = text.value;
    //     console.log(text);
    //     if (text.length < 3)
    //       return;

    //     debounced(text);
    //   })
    // });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
        // var keyups = Observable.fromEvent(this.el.nativeElement, 'keyup')
        //       .map((e: any) => e.target.value)
        //       .filter(t => t.length >= 3)
        //       .debounceTime(400)
        //       .distinctUntilChanged();
        // keyups.subscribe(data => console.log(data));
    }
}
