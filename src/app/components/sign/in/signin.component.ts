import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from '../../../services/storage/session-storage.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: any = {};
  isSignedIn = false;
  isSingInFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username: string;

  constructor(private authService: AuthService, private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    if (this.sessionStorageService.getUserToken()) {
      this.isSignedIn = true;
      this.roles = this.sessionStorageService.getUser().roles;
      this.username = this.sessionStorageService.getUser().username;
    }
  }

  onSubmit() {
    this.authService.signIn(this.form).subscribe(
      data => {
        this.sessionStorageService.setUserToken(data.token);
        this.sessionStorageService.saveUser(data);

        this.isSingInFailed = false;
        this.isSignedIn = true;
        this.roles = this.sessionStorageService.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSingInFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
