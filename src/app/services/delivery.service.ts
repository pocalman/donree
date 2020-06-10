import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from "src/app/services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class DeliveryService {
    form: FormGroup;

    constructor(   
        public authService: AuthService,
        public firestore: AngularFirestore,
        public afAuth: AngularFireAuth, 
        public router: Router,  
        ) {}

    
  
    ngOnInit() {
        this.form = new FormGroup({
       
            customerName: new FormControl( "", [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
            ]),
           customerAddress: new FormControl( "", [
            Validators.required,
            Validators.minLength(10)
        ]),  
            deliveryAddress: new FormControl( "", [
                Validators.required,
                Validators.minLength(10)
            ]),
            don: new FormControl( "", [
                Validators.required,
                Validators.minLength(10)
            ]), 
            volume: new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ]),       
            phone: new FormControl("", [
                Validators.required,
                Validators.minLength(6)
            ]),        
        })
    
    }


    get customerName() {
        return this.form.get('customerName');
      }

    createDeliveryOrder(data) {
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
        uid = user.uid; 
        }
        return new Promise<any>((resolve, reject) =>{
            this.firestore
                .collection(`users/${user.uid}/deliveries/`)
                .add(data)
                .then(res => {}, err => reject(err));
                this.firestore
                .collection(`/deliveries/`)
                .add(data)
                .then(res => {}, err => reject(err));
                this.router.navigate(['deliveryanswer']);
        });
    }

    

 

  

  

}