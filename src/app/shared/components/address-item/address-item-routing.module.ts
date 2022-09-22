import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressItemPage } from './address-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddressItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressItemPageRoutingModule {}
