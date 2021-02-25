import {Injectable} from '@angular/core';
import {environment} from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RestPathService {

  constructor() {
  }

  public getEnvironment() {
    return environment;
  }

  public getContextPath(): string {
    return this.getEnvironment().protocol + '://'
      + this.getEnvironment().restApiHost + ':'
      + this.getEnvironment().restApiPort + '/'
      + this.getEnvironment().restApiVersion;
  }

  public getAuthMainRestPath(): string {
    return this.getContextPath() + '/'
      + this.getEnvironment().authRestMainPath;
  }

  public getDashboardMainRestPath(): string {
    return this.getContextPath() + '/'
      + this.getEnvironment().dashboardRestMainPath;
  }

  public getResetPasswordMainRestPath(): string {
    return this.getContextPath() + '/'
      + this.getEnvironment().resetPasswordMainPath;
  }

  public getMemberRestPath(): string {
    return this.getDashboardMainRestPath() + '/'
      + this.getEnvironment().memberPath;
  }

  public getSigninRestPath(): string {
    return this.getAuthMainRestPath() + '/'
      + this.getEnvironment().signinPath;
  }

  public getSignupRestPath(): string {
    return this.getAuthMainRestPath() + '/'
      + this.getEnvironment().signinPath;
  }

  public getForgotPasswordRestPath(): string {
    return this.getResetPasswordMainRestPath() + '/'
      + this.getEnvironment().emailPath;
  }

  public getNewPasswordRestPath(): string {
    return this.getResetPasswordMainRestPath() + '/'
      + this.getEnvironment().newpasswordPath;
  }

  public getVerifyPasswordResetTokenPath(): string {
    return this.getResetPasswordMainRestPath() + '/'
      + this.getEnvironment().verifyPasswordResetTokenPath;
  }

}
