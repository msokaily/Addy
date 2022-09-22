import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { GoogleMap,  } from '@angular/google-maps';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  host: { class: 'ministore-page' }
})
export class LocationPage implements OnInit {

  addressTxt = '';
  location: google.maps.LatLng;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  submit() {
    const data = {
      location: this.location?.toJSON() || null,
      addressTxt: this.addressTxt || ''
    };
    this.navCtrl.navigateForward(['user-address', 'address-details'], {
      queryParams: {
        userAddress: JSON.stringify(data)
      }
    });
  }

}
