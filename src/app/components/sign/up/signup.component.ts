import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Signup} from './model/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  signup: Signup = new Signup();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.initForm(this.signup);
  }

  initForm(signup: Signup) {
    this.form.get('username').setValue(signup.username);
    this.form.get('email').setValue(signup.email);
    this.form.get('password').setValue(signup.password);
  }

  onSubmit() {
    this.signup.username = this.form.get('username').value;
    this.signup.email = this.form.get('email').value;
    this.signup.password = this.form.get('password').value;
    this.signup.roles = new Array<string>();
    this.signup.roles.push('member');
    this.authService.signUp(this.signup).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
