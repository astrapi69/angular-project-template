import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  form: FormGroup;
  forbiddenEmails: any;
  validForm = true;
  errorMessage: string;
  successMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }

  resetPassword(form) {
    console.log(form);
    if (form.valid) {
      this.validForm = true;
      this.authService.forgotPassword(this.form.value).subscribe(
        data => {
          this.form.reset();
          this.successMessage = 'Reset password link send to email sucessfully.';
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['signin']);
          }, 3000);
        },
        err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } else {
      this.validForm = false;
    }
  }
}
