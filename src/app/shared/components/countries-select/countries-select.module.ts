import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountriesSelectPageRoutingModule } from './countries-select-routing.module';

import { CountriesSelectPage } from './countries-select.page';
import { SharedModule } from 'src/app/services/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountriesSelectPageRoutingModule,
    SharedModule
  ],
  declarations: [CountriesSelectPage]
})
export class CountriesSelectPageModule {}
