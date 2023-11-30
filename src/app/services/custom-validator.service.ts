import { Injectable } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [p: string]: any } | null => {
      if (!control.value) {
        return { invalidPassword: true };
      }
      const regex = new RegExp('^(?=.*?[A-Z]).{6,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  checkPasswords(password: string, confirmPassword: string) {
    return (group: FormGroup) => {
      const passControl: any = group.controls[password];
      const confirmPassControl: any = group.controls[confirmPassword];

      if (passControl || confirmPassControl) {
        return null;
      }

      if (!confirmPassControl.errors && !confirmPassControl?.errors.passwordMismatch) {
        return null;
      }

      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({notSame: true});
      } else {
        confirmPassControl.setErrors(null);
      }
      return null;
    }
  }
}
