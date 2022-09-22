import { NavController } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministore-review-order',
  templateUrl: './ministore-review-order.page.html',
  styleUrls: ['./ministore-review-order.page.scss'],
  host: { class: 'ministore-page' }
})
export class MinistoreReviewOrderPage implements OnInit {

  order: any;

  deliveryFee = 35;
  vat = 50;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  get totalGrand() {
    return (this.order?.cartInfo?.total || 0) + this.deliveryFee + this.vat;
  }

  get deliveryTime() {
    return `${this.order?.deliveryInfo?.day?.date}
    <span style="display: inline-block; width: 10px;"></span>
    ${this.order?.deliveryInfo?.fromTime} - ${this.order?.deliveryInfo?.toTime}`;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((v: any) => {
      if (v?.order) {
        this.order = JSON.parse(v.order);
      }
    });
  }

  submit() {
    this.navCtrl.navigateRoot('success', {
      queryParams: {
        order: JSON.stringify(this.order)
      }
    });
  }

}
