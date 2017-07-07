import { PreventUnsavedChangesGuardTemplate } from './../shared-guards/prevent-unsaved-changes-guard.service';
import { NewCourseComponent } from './new-course.component';

import { Router, RouterModule } from '@angular/router';

// store global routing in this variable, protect by const against any changes
export const newCourseRouting = RouterModule.forChild([
    {
        path: 'new-course',
        component: NewCourseComponent,
        canDeactivate: [ PreventUnsavedChangesGuardTemplate ]
    },
])
