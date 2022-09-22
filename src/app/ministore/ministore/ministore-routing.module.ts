import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistorePage } from './ministore.page';

const routes: Routes = [
  {
    path: '',
    component: MinistorePage
  },
  {
    path: 'product',
    loadChildren: () => import('../ministore-product/ministore-product.module').then( m => m.MinistoreProductPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../ministore-cart/ministore-cart.module').then( m => m.MinistoreCartPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('../ministore-filter/ministore-filter.module').then( m => m.MinistoreFilterPageModule)
  },
  {
    path: 'review-order',
    loadChildren: () => import('../ministore-review-order/ministore-review-order.module').then( m => m.MinistoreReviewOrderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MinistorePageRoutingModule { }
