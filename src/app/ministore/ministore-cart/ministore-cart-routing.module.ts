import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistoreCartPage } from './ministore-cart.page';

const routes: Routes = [
  {
    path: '',
    component: MinistoreCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistoreCartPageRoutingModule {}
