import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {CustomValidatorService} from "../../services/custom-validator.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private customValidator: CustomValidatorService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()] )],
      passwordConfirmation: ['', [Validators.required]]
    },
      {
        validator: this.customValidator.checkPasswords('password', 'passwordConfirmation')
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.get('email')?.errors?.['email'])
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (res) => {
          console.log(res);
          // TODO: redirect to /today
        },
        (err) => {
          console.log(err);
          alert('Invalid form');
          // TODO: Handle registration error in UI
        }
      )
    } else {
      console.log(this.registerForm);
    }
  }

}
