import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {


  deliveries: Observable<any[]>;

  constructor(
    firestore: AngularFirestore,
  ) {
    var user = firebase.auth().currentUser;
    var uid;
    console.log(user);
    if (user != null) {
      uid = user.uid; 
      }
    this.deliveries = firestore.collection(`users/${user.uid}/deliveries/`).valueChanges();
console.log(this.deliveries );
   }

  ngOnInit(): void {
  }


}




