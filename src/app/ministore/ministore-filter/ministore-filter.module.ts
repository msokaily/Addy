import { SharedModule } from './../../services/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreFilterPageRoutingModule } from './ministore-filter-routing.module';

import { MinistoreFilterPage } from './ministore-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MinistoreFilterPageRoutingModule
  ],
  declarations: [MinistoreFilterPage]
})
export class MinistoreFilterPageModule {}
