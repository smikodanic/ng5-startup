import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng5plus-auth';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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
