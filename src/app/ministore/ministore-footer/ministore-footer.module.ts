import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistoreFooterPageRoutingModule } from './ministore-footer-routing.module';

import { MinistoreFooterPage } from './ministore-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistoreFooterPageRoutingModule
  ],
  declarations: [MinistoreFooterPage],
  exports: [MinistoreFooterPage]
})
export class MinistoreFooterPageModule {}
