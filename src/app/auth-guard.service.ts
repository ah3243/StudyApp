import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  // Add private authService: AuthService
  constructor() { }

  canActivate() {
    console.log('Authguard#canActivate called');
    return true;
  }
}
