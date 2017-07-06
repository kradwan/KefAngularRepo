import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  constructor(fb: FormBuilder) {
    fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        emial: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

  addTopic(topic: HTMLInputElement) {
    this.topics
      .push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }
}
