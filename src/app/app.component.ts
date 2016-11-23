import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseObjectObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.object('/items');
  }

  save(newName: string) { 
    this.items.set({name: newName});
  }

  update(newSize: string) {
    this.items.update({ size: newSize });
  }
  delete() {
    this.items.remove();
  }  

}
