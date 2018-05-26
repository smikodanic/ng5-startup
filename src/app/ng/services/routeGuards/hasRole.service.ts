import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GlobalsService } from '../globals.service';

/**
 * Check if user has good role: admin, customer. If not redirect to /login page.
 */
@Injectable()
export class HasRoleService implements CanActivate {


  constructor(private globalsService: GlobalsService, private r: Router) { }

  canActivate(ars: ActivatedRouteSnapshot, rss: RouterStateSnapshot) {

    // get loggedUser info after successful username:password login
    const loggedUser = this.globalsService.loggedUser;
    // console.log('hasRole-loggedUser: ', this.globalsService.loggedUser);

    // get current URL and check if user's role (admin, customer) is contained in it
    const currentUrl = rss.url; // '/admin/dashboard'
    // console.log('hasRole-currentUrl: ', currentUrl);

    let tf = false;
    if (loggedUser) {
      tf = currentUrl.indexOf(loggedUser.role) !== -1;
    }

    if (!tf) {
      this.r.navigateByUrl('/login');
      console.error(new Error('Guard blocks this route because user doesn\'t have good role. Redirection to /login page.'));
    }

    return tf;
  }

}
