import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

import { CookieService } from 'ngx-cookie-service';
import { GlobalsService } from '../../ng/services/globals.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private globalsService: GlobalsService,
    private r: Router) { }

  /**
   * Login
   * @param creds // {username: xxx, password: xxx}
   */
  login(creds) {
    return this.http.post(`${environment.api_base_url}/users/login`, creds)
      .do((v: any) => {
        /* set cookie
          browser_storage: {
            username: 'marko',
            role: 'admin',
            authorization_header: 'JWT xyz...'
          }
        */
        let cookie_val: any;
        if (v) {
          cookie_val = JSON.stringify(v.browser_storage);
        } else {
          cookie_val = '';
        }
        this.cookieService.set('authAPI', cookie_val);

        /* set loggedUser to global variables */
        this.globalsService.loggedUser = v.user;

        /* redirect to URL */
        const afterSuccessLoginUrl = `/${v.user.role}`;
        this.r.navigateByUrl(afterSuccessLoginUrl);
      })
      .catch((err: Error) => {
        /* remove cookie*/
        this.cookieService.set('authAPI', '');

        /* remove loggedUser from global variables */
        this.globalsService.loggedUser = '';

        // return error
        return Observable.throw(err);
      });

  }


  /**
   * Logout
   */
  logout() {
    this.cookieService.set('authAPI', '');
  }


}
