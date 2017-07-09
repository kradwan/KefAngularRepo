import { UsersFollowersGithubService } from './../users-list-pagintation-img/users-followers-github.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-img',
  templateUrl: './user-details-img.component.html',
  styleUrls: ['./user-details-img.component.css']
})
export class UserDetailsImgComponent implements OnInit {
  testId = 1;
  page = 1;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersFollowersGithubService) { }

  ngOnInit() {
    // snapshot - takes routing params only during initialization, only once no tracking
    // let id = this.route.snapshot.paramMap.get('id');
    // this.userService.get(id));
    // console.log('UsersFollowersGithubService: ', id);

    // to observe route parameters innside link
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log('UsersFollowersGithubService: ', id);
        // this.userService.get(id));
      });
  }

  onClick() {
    // imperative navigation - here we use route array parameters as in routes
    this.router.navigate(['/users', this.testId, `user${this.testId++}`], { queryParams: { page: this.page++, order: 'oldest' } });
  }

  submit() {
    this.router.navigate(['/users'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
