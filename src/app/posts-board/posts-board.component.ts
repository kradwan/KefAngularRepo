import { BadInputError } from './../common/errors/bad-input-error';
import { NotFoundError } from 'app/common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
import { PostsService } from './../../services/posts.service';
// import { Http } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
// import * as _ from 'underscore';

// this.url = 'https://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'app-posts-board',
  templateUrl: './posts-board.component.html',
  styleUrls: ['./posts-board.component.css']
})
export class PostsBoardComponent implements OnInit {
  posts: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAll()
      .subscribe( posts => this.posts = posts,

        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('Not found.');
          else throw error;
        }
      );
  }

  createPost(input: HTMLInputElement) {
    if (input.value.length < 3)
      return;

    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    this.postsService.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          console.log(newPost);
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInputError) {
              // this.form.setErrors(error.originalError);
          }

          else throw error;
        });

    input.value = '';
  }

  updatePost(post) {
    this.postsService.update(post)
      .subscribe(
        updatedPost => console.log(updatedPost),

        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert(error.originalError.msg);

          if (error instanceof BadInputError) // FIXME: I cannot use else if clause, problem in TS?
            alert(error.originalError.msg);

          else throw error;
        }
      );
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

    this.postsService.delete(post.id)
      .subscribe(
        null, // () => { },

        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');

          if (error instanceof BadInputError)
            alert(error.originalError.msg);

          else throw error;
        }
      );
  }
}
