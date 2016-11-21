import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topicSearch',
  templateUrl: './topicSearch.component.html',
  styleUrls: ['./topicSearch.component.css']
})
export class TopicSearchComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
   }

  ngOnInit() {
  }
  
  Logout() {
      this.af.auth.logout();
      this.router.navigateByUrl('login');  
  }

}
