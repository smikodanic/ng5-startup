import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GlobalsService } from '../globals.service';

/**
 * Check if user is logged.
 */
@Injectable()
export class IsLoggedService implements CanActivate {


  constructor(private globalsService: GlobalsService, private r: Router) { }

  canActivate(ars: ActivatedRouteSnapshot, rss: RouterStateSnapshot) {

    // get loggedUser info after successful username:password login
    const loggedUser = this.globalsService.loggedUser;
    // console.log('isLogged-loggedUser: ', this.globalsService.loggedUser);

    const tf: boolean = !!loggedUser;

    // redirect to /login
    if (!tf) {
      this.r.navigateByUrl('/login');
      console.error(new Error('Guard blocks this route because user is not logged. Redirection to /login page.'));
    }

    return tf;
  }

}
