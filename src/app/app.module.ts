import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  AngularFireModule,
  FIREBASE_PROVIDERS,
  AuthProviders,
  AuthMethods
} from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { NavService } from './nav.service';

import { LoginComponent } from './login/login.component';
import { TopicSearchComponent } from './topicSearch/topicSearch.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { PaperComponent } from './paper/paper.component';

// Import local config file
var apiConfig = require('../apiconfig.json');

// Initialize Firebase
const firebaseConfig = {
  // Must insert own API details here..
  apiKey: apiConfig.APIKey, 
  authDomain: apiConfig.authDomain,
  databaseURL: apiConfig.databaseURL,
  storageBucket: apiConfig.storageBucket,
  messagingSenderId: apiConfig.messagingSenderId
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
    AppRoutingModule
  ],
  providers: [ AuthGuard, NavService ],
  declarations: [
    AppComponent,
    TopicSearchComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    TopicDetailComponent,
    PaperComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
