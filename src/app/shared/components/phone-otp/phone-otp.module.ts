import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneOtpPageRoutingModule } from './phone-otp-routing.module';

import { PhoneOtpPage } from './phone-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneOtpPageRoutingModule
  ],
  declarations: [PhoneOtpPage]
})
export class PhoneOtpPageModule {}
