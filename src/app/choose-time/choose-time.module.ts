import { TimeSelectPageModule } from './../shared/components/time-select/time-select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseTimePageRoutingModule } from './choose-time-routing.module';

import { ChooseTimePage } from './choose-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseTimePageRoutingModule,
    TimeSelectPageModule
  ],
  declarations: [ChooseTimePage]
})
export class ChooseTimePageModule {}
