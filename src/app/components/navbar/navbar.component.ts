import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SessionStorageService} from '../../services/storage/session-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private roles: string[];
  isSignedIn = false;
  username: string;
  isNavbarCollapsed = true;
  form: FormGroup;
  constructor(private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {

    this.isSignedIn = !!this.sessionStorageService.getUserToken();

    if (this.isSignedIn) {
      const user = this.sessionStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
    this.form = new FormGroup({
      searchText: new FormControl('')
    });
  }

  signOut() {
    this.sessionStorageService.signOut();
    window.location.reload();
  }

}
