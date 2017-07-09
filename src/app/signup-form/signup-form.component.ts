import { EmailValidators } from './../common/validators/email.validators';
import { ReactiveFormGuard } from './../shared-guards/prevent-unsaved-changes-guard.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './../common/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit, ReactiveFormGuard {
  form = new FormGroup(
    {
      'username': new FormControl('', [
        // Validators.required,
        // Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.usernameRequired,
        UsernameValidators.minLength,
      ], [ // async validators
        UsernameValidators.shouldBeUnique
      ]),
      'email': new FormControl('', [
        // Validators.required,
        // Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.usernameRequired,
        UsernameValidators.minLength,
        EmailValidators.email,
      ], [ // async validators
        // UsernameValidators.shouldBeUnique
      ]),
      //FormGroup
      password: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
      ])
    }
  );

  get username(){
    return this.form.get('username');
  }
  constructor() { }

  ngOnInit() {
  }

  login() {
    // this will be authenticate service, we send Json value object with login and password
    // let isValid = authService.login(this.form.value);
    // if(!isValid){
      this.form.setErrors({
        invalidLogin: true
      }); // we can set errors at form level
    // }
    // if you want setErrors at a particular form element you have to call it this method per formControl object
    // this.username.setErrors
  }

  // Guards
  hasUnsavedChanges(): Boolean {
    return this.form.dirty;
  }
}
