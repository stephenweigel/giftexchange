import { ValidatorFn, FormArray } from '@angular/forms';

export function formArrayLengthValidator(minLength: number): ValidatorFn {
    return (control: FormArray): { [key: string]: any } | null => {
        return control.controls.length >= minLength ? null : { minLength: true};
    };
}