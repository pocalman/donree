import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import {} from "googlemaps";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth
  ) { }

  title: string = '';
  latitude: number;
  longitude: number;
  zoom:number;
  




  

  ngOnInit() {
    this.setCurrentLocation();
  }
 
    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }

    

}
