import { FormControl } from '@angular/forms';
// import { Control } from '@angular/common';

export class EmailValidators {
    static email(control: FormControl) {
        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regEx.test(control.value);
        return valid ? null : { email: true };
    }
}