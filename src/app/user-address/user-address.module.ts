import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAddressPageRoutingModule } from './user-address-routing.module';

import { UserAddressPage } from './user-address.page';

import { AddressItemPageModule } from './../shared/components/address-item/address-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAddressPageRoutingModule,
    AddressItemPageModule
  ],
  declarations: [UserAddressPage]
})
export class UserAddressPageModule {}
