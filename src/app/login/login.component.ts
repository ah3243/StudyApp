import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NavService } from '../nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NavService]
})
export class LoginComponent implements OnInit {
  
  ngOnInit() {
  }

  constructor(public af: AngularFire, private router: Router, private navService: NavService) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  // Emlogin() {
  //   this.af.auth.login({
  //     email: '54cf6ca4@opayq.com',
  //     password: 'example',
  //   },
  //   {
  //     provider: AuthProviders.Password,
  //     method: AuthMethods.Popup,
  //   })
  // }
  
   // Login with Facebook  
  FBlogin() {
    var localNav = this.navService; // Create local version of navService

    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(function (val) {
      console.log('Logged in with fb');
      localNav.TakeMeTo('hawaii'); // Route to Topic search on successful Login
      }, function (err) {
        console.log(err)
      });
  }

  // Google Login
  Glogin() {
    var localNav = this.navService; // Create local version of navService
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(function (val) {
      localNav.TakeMeTo('the moon'); // Route to Topic search on successful Login
      }, function (err) { 
        console.log(err);
      });
  }

  // Twitter Login
  Tlogin() {
    var localNav = this.navService; // Create local version of navService
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }).then(function (val) {
      console.log(val);
      localNav.TakeMeTo('mars'); // Route to Topic search on successful Login
      }, function (err) {
        console.log(err);
       });  
  }

  // Anonymous login
  overrideLogin() {
    var localNav = this.navService; // Create local version of navService
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    }).then(function (val) {
      console.log(val);
      localNav.TakeMeTo('pluto'); // Route to Topic search on successful Login
      }, function (err) {
      
    });    
  }

  Logout() {
    this.af.auth.logout();
  }  
  
}
