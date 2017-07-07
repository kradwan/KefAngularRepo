import { PreventUnsavedChangesGuard, PreventUnsavedChangesGuardTemplate } from './shared-guards/prevent-unsaved-changes-guard.service';
import { AuthService } from './../services/auth.service';
import { photosRouting } from './photos/photos.routing';
import { PostsService } from './../services/posts.service';
import { AuthorsService } from './../services/authors.service';
import { CoursesService } from './../services/courses.service';
import { CoursesComponent } from './courses/courses.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { SummaryPipe } from './../pipes/summary.pipe';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { VoterComponent } from './voter/voter.component';
import { SearchBoxSpotifyComponent } from './search-box-spotify/search-box-spotify.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsBoardComponent } from './posts-board/posts-board.component';
import { AppErrorHandler } from 'app/common/errors/app-error-handler';

import { newCourseRouting } from './new-course/new-course.routing';
import { signupRouting } from './signup-form/signup-form.routing'
import { routing } from './app.routing';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { AuthGuard } from 'app/shared-guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { CommonWidgetsComponent } from './common-widgets/common-widgets.component';
import { commonWidgetsRouting } from 'app/common-widgets/common.routing';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    VoterComponent,
    SearchBoxSpotifyComponent,
    PhotosComponent,
    PostsBoardComponent,
    PhotoDetailsComponent,
    HomeComponent,
    CommonWidgetsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    // routing - order important
    photosRouting,
    newCourseRouting,
    signupRouting,
    commonWidgetsRouting,
    routing
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostsService,
    AuthService,

    { provide: ErrorHandler, useClass: AppErrorHandler },

    // Guards
    AuthGuard,
    PreventUnsavedChangesGuard,
    PreventUnsavedChangesGuardTemplate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
