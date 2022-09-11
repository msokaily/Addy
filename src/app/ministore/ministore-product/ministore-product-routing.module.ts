import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistoreProductPage } from './ministore-product.page';

const routes: Routes = [
  {
    path: '',
    component: MinistoreProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistoreProductPageRoutingModule {}
