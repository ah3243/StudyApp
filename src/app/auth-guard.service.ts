import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {

  public allowed: Boolean;
  

  // Add private authService: AuthService
  constructor(private af:AngularFire ,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Boolean> {
    return this.af.auth.map((auth) => {
      console.log('Authguard#canActivate called');  
      
      if (auth == null) {
        this.router.navigateByUrl('login');
        return false;
      } else {
        return true;        
      }
     }).first()
  }
}
