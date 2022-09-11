import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistoreCartItemPage } from './ministore-cart-item.page';

const routes: Routes = [
  {
    path: '',
    component: MinistoreCartItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistoreCartItemPageRoutingModule {}
