import { PhoneInputPageModule } from './../../shared/components/phone-input/phone-input.module';
import { MinistoreCartItemPageModule } from './../ministore-cart-item/ministore-cart-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreCartPageRoutingModule } from './ministore-cart-routing.module';

import { MinistoreCartPage } from './ministore-cart.page';
import { SharedModule } from 'src/app/services/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistoreCartPageRoutingModule,
    MinistoreCartItemPageModule,
    SharedModule,
    PhoneInputPageModule
  ],
  declarations: [MinistoreCartPage]
})
export class MinistoreCartPageModule {}
