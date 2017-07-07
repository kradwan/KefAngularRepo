import { AuthService } from './../../services/auth.service';
import { Injectable }           from '@angular/core';
import { CanActivate, Router }  from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router) {

    }
    canActivate() {
        if (this.authService.isLoggedIn)
            return true;

        // imperative navigation, redirection for that we need Router
        this.router.navigate(['']);
    }
}