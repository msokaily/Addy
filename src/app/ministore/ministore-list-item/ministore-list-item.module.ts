import { SharedModule } from './../../services/shared.module';
import { McurrencyPipe } from './../../pipes/mcurrency/mcurrency.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreListItemPageRoutingModule } from './ministore-list-item-routing.module';

import { MinistoreListItemPage } from './ministore-list-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistoreListItemPageRoutingModule,
    SharedModule
  ],
  declarations: [MinistoreListItemPage],
  exports: [MinistoreListItemPage]
})
export class MinistoreListItemPageModule {}
