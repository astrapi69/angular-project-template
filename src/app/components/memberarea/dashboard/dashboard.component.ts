import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/auth/user.service';
import {DashboardService} from '../../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  content = '';

  constructor(private userService: UserService,
              private dashboardService: DashboardService) { }

  ngOnInit() {
    this.userService.getMemberArea().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.dashboardService.member().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
