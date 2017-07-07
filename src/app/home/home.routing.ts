import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';

// store global routing in this variable, protect by const against any changes
export const signupRouting = RouterModule.forChild([
    {
        path: 'home',
        component: HomeComponent,
    },
])
