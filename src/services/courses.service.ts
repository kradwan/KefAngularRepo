import { ICoursesService } from './courses.service';
export interface ICoursesService{
    getCourses(): any;
}

export class CoursesService implements ICoursesService {
    getCourses() {
        return ["course1", "course2", "course3"];
    }
}