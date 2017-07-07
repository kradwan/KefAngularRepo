import { CommonWidgetsComponent } from './common-widgets.component';
import { Router, RouterModule } from '@angular/router';

// store global routing in this variable, protect by const against any changes
export const commonWidgetsRouting = RouterModule.forChild([
    {
        path: 'common-widgets',
        component: CommonWidgetsComponent,
    },
])
