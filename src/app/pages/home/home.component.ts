import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpRoutes } from '../../http-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiResponse: any = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }


  testAdminEndpoint() {
    this.httpClient.get(httpRoutes.admin.test)
      .subscribe(
        apiRes => {
          console.log(apiRes);
        },
        err => {
          this.apiResponse = err;
          console.error(err);
        }
      );
  }


  testCustomerEndpoint() {
    this.httpClient.get(httpRoutes.customer.test)
      .subscribe(
        apiRes => {
          this.apiResponse = apiRes;
          console.log(apiRes);
        },
        err => {
          this.apiResponse = err;
          console.error(err);
        }
      );
  }

}
