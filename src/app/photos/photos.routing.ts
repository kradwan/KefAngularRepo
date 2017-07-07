import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './../photo-details/photo-details.component';

import { Router, RouterModule } from '@angular/router';

// store global routing in this variable, protect by const against any changes
export const photosRouting = RouterModule.forChild([
    { path: 'photo/:id', component: PhotoDetailsComponent },
    { path: 'photos', component: PhotosComponent },
])
