import { AppError } from './../app/common/errors/app-error';
import { BadInputError } from './../app/common/errors/bad-input-error';
import { NotFoundError } from 'app/common/errors/not-found-error';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'; // static method accessible by observable class, factory method
import 'rxjs/add/operator/catch'; // instance method available on observable object
import 'rxjs/add/operator/map'; // transfer an item into observable
// map transforms it itno java script objects
// .map(response => response.json())


export class ServiceBase {
    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http
            .get(this.url)
                .map(response => response.json())
            .catch(this.handleError);
    }

    get(id: number) {
        return this.http
            .get(this.url)
                .map(response => response.json())
            .catch(this.handleError);
    }

    create(input) {
        return this.http
            .post(this.url,
                JSON.stringify(input))
                .map(response => response.json())
            .catch(this.handleError);
    }

    update(input) {
        return this.http
            .put(this.url + '/' + input['id'],
                JSON.stringify(input))
                .map(response => response.json())
            .catch(this.handleError);
    }

    patch(...input: any[]) {
        // patch
        // this.http.patch(this.url +
        //           '/' + post['id'],
        //           JSON.stringify({ isRead: true }))
        //     .map(response => response.json())
        // .catch(this.handleError);
    }

    delete(id: number) {
        return this.http
            .delete(this.url + '/' + id)
                // .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 404)
            return Observable.throw(new NotFoundError());

        if (error.status === 400)
            return Observable.throw(new BadInputError(error.json()));

        return Observable.throw(new AppError(error));
    }
}
