import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "My Example page";

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

    Logout() {
    this.af.auth.logout();
  }  
}



