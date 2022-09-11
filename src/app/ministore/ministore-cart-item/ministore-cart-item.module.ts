import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreCartItemPageRoutingModule } from './ministore-cart-item-routing.module';

import { MinistoreCartItemPage } from './ministore-cart-item.page';
import { SharedModule } from 'src/app/services/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistoreCartItemPageRoutingModule,
    SharedModule
  ],
  declarations: [MinistoreCartItemPage],
  exports: [MinistoreCartItemPage]
})
export class MinistoreCartItemPageModule {}
