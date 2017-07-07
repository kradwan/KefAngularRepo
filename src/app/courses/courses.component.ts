import { TemplateFormComponent } from './../shared-guards/prevent-unsaved-changes-guard.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, TemplateFormComponent {
    form: FormGroup;
    email = '';
    textCourses = `
    Lalalala kotrki dwa szare bure obydwa blablaba dudududu kakakak lelele dlkd dallal dasdkla dkslad kas
    `;

    isActive = true;
    title = 'List of our courses';
    private _courses;

    constructor(service: CoursesService) {
        this._courses = service.getCourses();
    }

    onShowDetails(f: FormGroup) {
        this.form = f;
    }

    ngOnInit() {

    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        $event.stopPropagation();
        console.log('Button clicked!', $event.currentTarget);
    }

    onDivClicked() {
        console.log('Div was clicked!');
    }
    onKeyUpEmail() {
        console.log(this.email); // $event.currentTarget.value
    }
    // old approach
    onKeyUp($event) {
        console.log(`inserted: ${$event.target.value}`); // $event.currentTarget.value
    }
}
