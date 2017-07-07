import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseCategories = [
    {id: 1, name: 'IT'},
    {id: 2, name: 'Automation'},
    {id: 3, name: 'Electrical Engineering'},
  ];

  constructor() { }

  submit(value) {
    console.log(value);
  }
  ngOnInit() {
  }

}
