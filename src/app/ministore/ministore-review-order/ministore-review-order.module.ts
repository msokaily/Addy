import { AddressItemPageModule } from './../../shared/components/address-item/address-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreReviewOrderPageRoutingModule } from './ministore-review-order-routing.module';

import { MinistoreReviewOrderPage } from './ministore-review-order.page';
import { SharedModule } from 'src/app/services/shared.module';
import { MinistoreCartItemPageModule } from './../ministore-cart-item/ministore-cart-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistoreReviewOrderPageRoutingModule,
    MinistoreCartItemPageModule,
    SharedModule,
    AddressItemPageModule
  ],
  declarations: [MinistoreReviewOrderPage]
})
export class MinistoreReviewOrderPageModule {}
