import { ActivatedRoute } from '@angular/router';
import { UsersFollowersGithubService } from './users-followers-github.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// factory method, static method on observable class, create one and subscribe on it
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users-list-pagintation-img',
  templateUrl: './users-list-pagintation-img.component.html',
  styleUrls: ['./users-list-pagintation-img.component.css']
})
export class UsersListPagintationImgComponent implements OnInit {
  users: any[];
  isLoading = true;

  constructor(
    private service: UsersFollowersGithubService,
    private route: ActivatedRoute) {	}

  ngOnInit() {
    // Combine observables into one
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page});
      return this.service.getAll()
    })
    .subscribe(users => {
      this.isLoading = false;
      this.users = users
    });
  }

  delete(user) {
    if (confirm('Are you sure you want to delete ' + user.name + '?')) {
      let index = this.users.indexOf(user)
      // Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

      this.service.delete(user.id)
        .subscribe(null,
          err => {
            alert('Could not delete the user.');
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
            this.users.splice(index, 0, user);
          });
    }
  }

}
