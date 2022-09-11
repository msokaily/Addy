/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Virtual } from 'swiper';
import { SwiperOptions } from 'swiper';
import { IonicSlides, NavController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';

import { SharedService } from 'src/app/services/shared.service';

import { MiniStoreItem } from './../ministore-list-item/ministore-list-item.page';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Virtual, IonicSlides]);

@Component({
  selector: 'app-ministore-product',
  templateUrl: './ministore-product.page.html',
  styleUrls: ['./ministore-product.page.scss'],
  host: {class: 'ministore-page'}
})
export class MinistoreProductPage implements OnInit {

  @ViewChild('slider', {static: false}) slider: SwiperComponent;

  item?: MiniStoreItem;

  swiperOptions: SwiperOptions = {
    autoplay: true,
    height: 300,
    pagination: {
      clickable: true
    }
  };

  constructor(
    private route: ActivatedRoute,
    public shared: SharedService,
    private navCtrl: NavController
  )
  {
    this.route.queryParams.subscribe((v: any) => {
      this.item = v?.item ? JSON.parse(v.item) : null;
    });
  }

  ngOnInit() {
  }

  sizeChanged(e) {
  }

  colorChanged(e) {
  }

  buyNow() {
    this.navCtrl.navigateBack('ministore', {
      queryParams: {
        buy: JSON.stringify(this.item)
      }
    });
  }
  addToCart() {
    this.navCtrl.navigateBack('ministore');
  }

}
