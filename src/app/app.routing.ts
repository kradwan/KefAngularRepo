import { HomeComponent } from './home/home.component';
import { PreventUnsavedChangesGuardTemplate } from './shared-guards/prevent-unsaved-changes-guard.service';
import { AuthGuard } from './shared-guards/auth-guard.service';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { PostsBoardComponent } from './posts-board/posts-board.component';
import { CoursesComponent } from './courses/courses.component';

import { Router, RouterModule } from '@angular/router';

// store global routing in this variable, protect by const against any changes
export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [ AuthGuard ],
        canDeactivate: [ PreventUnsavedChangesGuardTemplate ]
    },
    { path: 'posts', component: PostsBoardComponent },
    { path: '**', component: AuthorsComponent }
])
