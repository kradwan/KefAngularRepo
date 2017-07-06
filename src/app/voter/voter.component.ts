import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('votes') voteCount: number;
  @Input('my-vote') myVote: number;

  // tslint:disable-next-line:no-output-rename
  @Output('vote') click = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  upVote() {
    // tslint:disable-next-line:curly
    if (this.myVote === 1)
      return;

    this.myVote++;

    this.emitVote(this.myVote);
  }

  downVote() {
  // tslint:disable-next-line:curly
  if (this.myVote === -1)
      return;

    this.myVote--;

    this.emitVote(this.myVote);
  }

  private emitVote(userVote: number) {
    this.click.emit( {userVote : this.myVote} );
  }
}
