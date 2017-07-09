import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors {
        // tslint:disable-next-line:curly
        if ((control.value as string).indexOf(' ') !== -1) //or >= 0
            return { cannotContainSpace: true } // shall return key and object
        return null;
    }

    static usernameRequired(control: AbstractControl): ValidationErrors {
        if ((control.value as string).length < 1)
            return { required: true }
        return null;
    }

    static minLength(control: AbstractControl): ValidationErrors {
        if ((control.value as string).length < 5)
            return {
                minlength: {
                    requiredLength: 5,
                    actualLength: control.value.length
                }
            }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> | Promise<null> {
        // resolve & reject are functions
        // resolve -> returns value to caller
        // reject -> in case of a failure, with message as a reason, you can send object
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // tslint:disable-next-line:curly
                if (control.value === 'kefirek') {
                    // return { shouldBeUnique: true };
                    console.log('ok, async method executed');
                    resolve({ shouldBeUnique: true });
                }
                // return - can't be used as it returns from the funtion shouldBeUnique before execution
                else {
                    resolve(null);
                }
            }, 2000); // 2s
        });

        // ex async operations:
        // setTiemout()
        // setInterval()
    }
}