import { FormGroup } from '@angular/forms';

export interface TempFormComponent {
    form: FormGroup
}

export interface ReactiveFormComponent {
    // for template driven form
    hasUnsavedChanges(): Boolean;
}
