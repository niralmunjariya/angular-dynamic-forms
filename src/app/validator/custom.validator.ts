import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    constructor() { }

    static noSpace(control: AbstractControl) {
        const value = control.value;
        if (value) {
            return /\s/.test(value) ? { invalidUserName: true } : null;
        }
    }

    static noDuplicate(control: AbstractControl) {
        const value = control.value;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(null);
            }, 2000);
        });
    }

    static between(min: number, max: number): ValidatorFn {
        return (control: AbstractControl) => {
            if (control.value > min && control.value < max) {
                return null;
            }
            return { inRange: false };
        };
    }
}
