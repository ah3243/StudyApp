import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class NavService {

  constructor(private router: Router, ) { }
   
  // public NavOn = function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  // }

  TakeMeTo(location: string) {
    this.router.navigateByUrl('topicSearch');    
  }
}
