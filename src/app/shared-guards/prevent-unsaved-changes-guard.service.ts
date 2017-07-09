import { FormGroup } from '@angular/forms';

import { CanDeactivate } from '@angular/router';

export interface TemplateFormComponent {
    form: FormGroup
}

// CanDeactivate<T> -> geeric interface
export class PreventUnsavedChangesGuardTemplate implements CanDeactivate<TemplateFormComponent> {
    canDeactivate(component: TemplateFormComponent) {
        if (component.form)
            if (component.form.dirty)
                return confirm('Are you sure?, templateGuard');

        return true;
    }
}

export interface ReactiveFormGuard {
    // for template driven form
    hasUnsavedChanges(): Boolean;
}


export class PreventUnsavedChangesGuard implements CanDeactivate<ReactiveFormGuard> {
    canDeactivate(component: ReactiveFormGuard) {
        if (component.hasUnsavedChanges())
            return confirm('Are you sure, reactiveGuard?');

        return true;
    }
}