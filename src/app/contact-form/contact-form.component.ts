import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Text message'},
    {id: 3, name: 'Phone call'}
  ];

  onLog(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
    if (f.valid) { //f.invalid, f.errors, f.value.comment
      console.log(f.value.firstName + ' + ' + f.value.comment);
    }
  }
}
