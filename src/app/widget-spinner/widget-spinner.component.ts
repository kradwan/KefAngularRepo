import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-spinner',
  templateUrl: './widget-spinner.component.html',
  styleUrls: ['./widget-spinner.component.css']
})
export class WidgetSpinnerComponent implements OnInit {
  @Input() visible = true;
  
  constructor() { }

  ngOnInit() {
  }

}
