import { McurrencyPipe } from './../../pipes/mcurrency/mcurrency.pipe';
import { MinistoreListItemPageModule } from './../ministore-list-item/ministore-list-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreListPageRoutingModule } from './ministore-list-routing.module';

import { MinistoreListPage } from './ministore-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistoreListPageRoutingModule,
    MinistoreListItemPageModule
  ],
  declarations: [MinistoreListPage],
  exports: [MinistoreListPage]
})
export class MinistoreListPageModule {}
