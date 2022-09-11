import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatsSegmentPageRoutingModule } from './cats-segment-routing.module';

import { CatsSegmentPage } from './cats-segment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatsSegmentPageRoutingModule
  ],
  declarations: [CatsSegmentPage],
  exports: [CatsSegmentPage]
})
export class CatsSegmentPageModule {}
