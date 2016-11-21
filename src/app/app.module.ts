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
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopicSearchComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    TopicDetailComponent,
    PaperComponent
  ],
  providers: [ AuthGuard, NavService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
