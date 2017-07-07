import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "services/auth.service";
import { FavoritChangedEventArgs } from "app/favorite/favorite.component";

@Component({
  selector: 'app-common-widgets',
  templateUrl: './common-widgets.component.html',
  styleUrls: ['./common-widgets.component.css']
})
export class CommonWidgetsComponent implements OnInit {
  title = 'app';

  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ];
  post = {
    title: 'Post title',
    isSelected: true
  };
  tweet = {
    body: 'Here is the body of a tweet...',
    likesCount: 10,
    isLiked: false,
  }
  stackGrade = {
    voteCount : 10,
    userVote: 0
  }

  search = { url: 'https://api.spotify.com/v1/search?type=artist&q=' }
  viewMode = 'other'; //ngSwitchCase

  constructor(private _router: Router, private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.login('login', 'password');
  }

  onClick() {
    // imperative navigation - here we use route array parameters as in routes
    this._router.navigate(['photo', 2]);
  }

  

  onFavoritChanged(args: FavoritChangedEventArgs) {
    console.log('Favorit changed!', args.newValue);
  }

  

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onUpdate(course) {
    course.name = 'update';
  }

  onVote($event) {
    console.log('Actual vote: ', $event.userVote);
  }
}