import { SignupFormComponent } from './signup-form.component';
import { PreventUnsavedChangesGuard } from './../shared-guards/prevent-unsaved-changes-guard.service';
import { Router, RouterModule } from '@angular/router';

// store global routing in this variable, protect by const against any changes
export const signupRouting = RouterModule.forChild([
    {
        path: 'signup',
        component: SignupFormComponent,
        canDeactivate: [ PreventUnsavedChangesGuard ]
    },
])
