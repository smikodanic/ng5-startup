import { Component, OnInit } from '@angular/core';

import { AuthService } from 'ng5plus-auth';

import { HttpClient } from '@angular/common/http';
import { httpRoutes } from '../../http-routes';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loggedUser: any;
  apiResponse: any;

  constructor(private authService: AuthService, private httpClient: HttpClient) {
    this.loggedUser = authService.getLoggedUserInfo();
  }

  ngOnInit() {
  }

  logout() {
    console.log('LOGOUT:: ');
    this.authService.logout();
  }

  testAdminEndpoint() {
    this.httpClient.get(httpRoutes.admin.test)
      .subscribe(
        apiRes => {
          console.log(apiRes);
          this.apiResponse = apiRes;
        },
        err => {
          console.error(err);
        }
      );
  }

}
