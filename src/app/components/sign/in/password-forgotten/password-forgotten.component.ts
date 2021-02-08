import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.scss']
})
export class PasswordForgottenComponent implements OnInit {
  formGroup: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  validForm = true;

  constructor(private authService: AuthService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails),
    });
  }

  sendPasswordForgottenForm(form) {
    console.log(form);
    if (form.valid) {
      this.validForm = true;
      this.authService.forgotPassword(this.formGroup.value).subscribe(
        data => {
          this.formGroup.reset();
          this.successMessage = 'An email has send to your postbox with a reset password link.';
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
