import { ValidatorFn, FormArray } from '@angular/forms';

export function formArrayEvenLengthValidator(): ValidatorFn {
    return (control: FormArray): { [key: string]: any } | null => {
        return control.controls.length % 2 === 0 ? null : { oddList: true};
    };
}
