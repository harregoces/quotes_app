import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomValidatorService } from "../../services/custom-validator.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { SessionService } from "../../services/session.service";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private customValidator: CustomValidatorService,
    private router: Router,
    private sessionService: SessionService
    ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required ]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (res:any) => {
          const user = new User(res.user);
          this.sessionService.setUserSession(user, res.token);
          this.router.navigate(['/today'])
        },
        (err) => {
          console.log(err);
          alert('Invalid form');
        }
      );
    } else {
      alert ('Not valid')
    }
  }
}
