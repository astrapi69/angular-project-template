import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from '../../../../services/auth/auth.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  formGroup: FormGroup;
  errorMessage: string;
  successMessage: string;
  resetToken: string = null;
  currentState: any;
  validForm = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder ) {

    this.currentState = 'Wait';
    this.route.params.subscribe(params => {
      this.resetToken = params.token;
      console.log(this.resetToken);
      this.verifyPasswordResetToken();
    });
  }

  ngOnInit() {
    this.formGroup = this.fb.group(
      {
        token: [this.resetToken],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  verifyPasswordResetToken() {
    this.authService.verifyPasswordResetToken(this.resetToken).subscribe(
      data => {
        this.currentState = 'Verified';
      },
      err => {
        this.currentState = 'NotVerified';
      }
    );
  }

  validatePasswordForm(passwordFormGroup: FormGroup) {
    const newPasswordValue = passwordFormGroup.controls.newPassword.value;
    const confirmPasswordValue = passwordFormGroup.controls.confirmPassword.value;

    if (confirmPasswordValue.length <= 0) {
      return null;
    }

    if (confirmPasswordValue !== newPasswordValue) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }


  resetPassword(form) {
    console.log(form.get('confirmPassword'));
    if (form.valid) {
      this.validForm = true;
      this.authService.newPassword(this.formGroup.value.newPassword).subscribe(
        data => {
          this.formGroup.reset();
          this.successMessage = data.message;
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
    } else { this.validForm = false; }
  }
}
