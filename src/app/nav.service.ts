import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class NavService {

  constructor(private router: Router, ) { }
   
  TakeMeTo(location: string) {
    console.log('im going to ' + location);
    this.router.navigateByUrl('topicSearch');    
  }
}
