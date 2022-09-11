import { SharedModule } from './../../services/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreProductPageRoutingModule } from './ministore-product-routing.module';

import { MinistoreProductPage } from './ministore-product.page';

import { SwiperModule } from 'swiper/angular';

import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistoreProductPageRoutingModule,
    SwiperModule,
    SharedModule,
    NgxIonicImageViewerModule
  ],
  declarations: [MinistoreProductPage]
})
export class MinistoreProductPageModule {}
