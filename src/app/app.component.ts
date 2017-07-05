import { FavoritChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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

  onFavoritChanged(args: FavoritChangedEventArgs){
    console.log("Favorit changed!", args.newValue);
  }

  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ];

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
