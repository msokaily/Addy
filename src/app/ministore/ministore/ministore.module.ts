import { SharedModule } from './../../services/shared.module';
import { MinistoreFooterPageModule } from './../ministore-footer/ministore-footer.module';
import { MinistoreListPageModule } from './../ministore-list/ministore-list.module';
import { CatsSegmentPageModule } from './../cats-segment/cats-segment.module';
import { HeaderPageModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistorePageRoutingModule } from './ministore-routing.module';

import { MinistorePage } from './ministore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistorePageRoutingModule,
    HeaderPageModule,
    CatsSegmentPageModule,
    MinistoreListPageModule,
    MinistoreFooterPageModule,
    SharedModule
  ],
  declarations: [MinistorePage]
})
export class MinistorePageModule {}
