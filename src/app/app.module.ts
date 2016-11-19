import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireModule,
  FIREBASE_PROVIDERS,
  AuthProviders,
  AuthMethods
} from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];


// Initialize Firebase
const firebaseConfig = {
  apiKey: ***REMOVED***,
  authDomain: ***REMOVED***,
  databaseURL: ***REMOVED***,
  storageBucket: ***REMOVED***,
  messagingSenderId: ***REMOVED***
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
