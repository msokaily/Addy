import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneInputPageRoutingModule } from './phone-input-routing.module';

import { PhoneInputPage } from './phone-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneInputPageRoutingModule
  ],
  declarations: [PhoneInputPage],
  exports: [PhoneInputPage]
})
export class PhoneInputPageModule {}
