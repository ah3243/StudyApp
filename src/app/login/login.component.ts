import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {
  }

  constructor(public af: AngularFire, private router: Router) {
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
  
  FBlogin() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(function (val) {
      console.log('Logged in with fb');
      TakeMeTo('hawaii');
      },
      function (err) { console.log(err) });
  }

  // Google Login
  Glogin() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(function (val) {
      console.log(val);
      }, function (err) { 
        console.log(err);
      });
  }

  // Twitter Login
  Tlogin() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    });  
  }

  // Anonymous login
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });    
  }

  Logout() {
    this.af.auth.logout();
  }  
  
}
