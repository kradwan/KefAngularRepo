import { UserDetailsImgComponent } from './../user-details-img/user-details-img.component';
import { UsersListPagintationImgComponent } from './users-list-pagintation-img.component';
import { Router, RouterModule } from '@angular/router';

// store global routing in this variable, protect by const against any changes
export const usersRouting = RouterModule.forChild([
    {
        path: 'users/:id/:username',
        component: UserDetailsImgComponent
    },
    {
        path: 'users',
        component: UsersListPagintationImgComponent
    },
])
