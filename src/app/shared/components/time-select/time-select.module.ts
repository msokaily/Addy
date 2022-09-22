import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeSelectPageRoutingModule } from './time-select-routing.module';

import { TimeSelectPage } from './time-select.page';

import { SwiperModule } from 'swiper/angular';

import { SharedModule } from 'src/app/services/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeSelectPageRoutingModule,
    SwiperModule,
    SharedModule
  ],
  declarations: [TimeSelectPage],
  exports: [TimeSelectPage]
})
export class TimeSelectPageModule {}
