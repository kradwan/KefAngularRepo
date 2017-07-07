import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
  id;
  subscritpion;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subscritpion = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // plus converts string into a number
    // })

    this.id = this.route.snapshot.params['id'];
  }

  // explicitly clean up after navigating outside this photo details page
  ngOnDestroy() {
    // this.subscritpion.unsubscribe();
  }

}
