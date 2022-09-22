import { NavController } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
  host: { class: 'ministore-page' }
})
export class SuccessPage implements OnInit {

  order: any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  get deliveryTime() {
    const timeMoment = moment(new Date(this.order?.deliveryInfo?.day?.date));
    return `${timeMoment.format('dddd')} ${this.order?.deliveryInfo?.day?.date}
    <span style="display: inline-block; width: 5px;"></span>
    ${this.order?.deliveryInfo?.fromTime} - ${this.order?.deliveryInfo?.toTime}`;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((v: any) => {
      if (v?.order) {
        this.order = JSON.parse(v.order);
      }
    });
  }

  changePaymentMethod() {
  }

  goMinistore() {
    this.navCtrl.navigateRoot('ministore');
  }

}
