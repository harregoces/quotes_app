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
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['passwordConfirmation'].value;

    if (pass || confirmPass) {
      return null;
    }

    if (pass.value !== confirmPass.value) {
      group.controls['passwordConfirmation'].setErrors({ notSame: true });
    } else {
      group.controls['passwordConfirmation'].setErrors(null);
    }
    return null;
  }

}
