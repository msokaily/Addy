import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressItemPageRoutingModule } from './address-item-routing.module';

import { AddressItemPage } from './address-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressItemPageRoutingModule
  ],
  declarations: [AddressItemPage],
  exports: [AddressItemPage]
})
export class AddressItemPageModule {}
