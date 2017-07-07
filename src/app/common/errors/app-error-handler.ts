
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert('An unexpected error occured.'); // TODO: use toast notification instead of alerts
        console.log(error); // TODO: log on a server insead of to the console
    }
}
