import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donree';
  constructor() {
    const config = {
      apiKey: "AIzaSyBZpFsHM1tEn8aiGk33nGton69P5U-Foe0",
      authDomain: "donree-c9581.firebaseapp.com",
      databaseURL: "https://donree-c9581.firebaseio.com",
      projectId: "donree-c9581",
      storageBucket: "donree-c9581.appspot.com",
      messagingSenderId: "266416199390",
      appId: "1:266416199390:web:d72cf02f51c90197b2144f",
      measurementId: "G-FVPSBYLHZ3"
    };
    firebase.initializeApp(config);
  }
}

