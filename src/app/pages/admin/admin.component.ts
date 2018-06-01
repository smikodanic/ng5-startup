import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../ng/services/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loggedUser: any;

  constructor(private authService: AuthService) {
    this.loggedUser = authService.getLoggedUserInfo();
  }

  ngOnInit() {
  }

  logout() {
    console.log('LOGOUT:: ');
    this.authService.logout();
  }

}
