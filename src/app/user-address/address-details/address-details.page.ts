import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.page.html',
  styleUrls: ['./address-details.page.scss'],
  host: { class: 'ministore-page' }
})
export class AddressDetailsPage implements OnInit {

  userAddress: any;

  form = new FormGroup({
    addressLabel: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    buildingNo: new FormControl(),
    deliveryInstructions: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(v => {
      if (v?.userAddress) {
        this.userAddress = JSON.parse(v.userAddress);
        this.form.patchValue({
          address: this.userAddress.addressTxt
        });
      }
    });
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.navCtrl.navigateBack('user-address');
  }

}
