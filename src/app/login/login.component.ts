import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {
  }

  constructor(public af: AngularFire) {
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
    });
  }
  Glogin() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }
  Tlogin() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    });  
  }

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