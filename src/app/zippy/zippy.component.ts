import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  isExpanded = false;
  @Input('zippy-heading') heading: string;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
