
import { Component, OnInit, ViewChildren, ElementRef, NgZone } from '@angular/core';
import { DeliveryService } from "../services/delivery.service";
import { MapsAPILoader, MouseEvent } from '@agm/core';
import {FormGroup, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  
  
  form: FormGroup;


  delivery: any;
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChildren('search') child: HTMLElement;




  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.child);
  }
  
 


  public searchElementRef: ElementRef;

 

  constructor(public deliveryService:DeliveryService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private fb: FormBuilder,
    ){}



  onSubmit() {
    let data = this.form.value;

    
   this.deliveryService.createDeliveryOrder(data)
    
}

get customerName() { return this.customerName.get('customerName'); }

get customerAddress() { return this.customerName.get('customerAddress'); }

get deliveryAddress() { return this.customerName.get('deliveryAddress'); }

get don() { return this.customerName.get('don'); }

get phone() { return this.customerName.get('phone'); }


   ngOnInit() {

    this.form = new FormGroup({
       
      customerName: new FormControl( "", [
          Validators.required,
          Validators.minLength(3)
      ]),
     customerAddress: new FormControl( "", [
      Validators.required,
      Validators.minLength(6)
  ]),  
      deliveryAddress: new FormControl( "", [
          Validators.required,
          Validators.minLength(6)
      ]),
      don: new FormControl( "", [
          Validators.required,
          Validators.minLength(2)
      ]), 
      volume: new FormControl("", [
          Validators.required,
          Validators.minLength(1)
      ]),       
      phone: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
      ]),        
  })


    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      var autocompInputs = document.getElementsByClassName("automplete");
      
      for (var i = 0; i < autocompInputs.length; i++){
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    }
    });
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 8;
          this.getAddress(this.latitude, this.longitude);
        });
      }
    }

    markerDragEnd($event: MouseEvent) {
      console.log($event);
      this.latitude = $event.coords.lat;
      this.longitude = $event.coords.lng;
      this.getAddress(this.latitude, this.longitude);
    }


    getAddress(latitude, longitude) {
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
        console.log(results);
        console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
   
      });
    }


}
