import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistorePage } from './ministore.page';

const routes: Routes = [
  {
    path: '',
    component: MinistorePage
  },
  {
    path: 'ministore-product',
    loadChildren: () => import('../ministore-product/ministore-product.module').then( m => m.MinistoreProductPageModule)
  },
  {
    path: 'ministore-cart',
    loadChildren: () => import('../ministore-cart/ministore-cart.module').then( m => m.MinistoreCartPageModule)
  },
  {
    path: 'ministore-filter',
    loadChildren: () => import('../ministore-filter/ministore-filter.module').then( m => m.MinistoreFilterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MinistorePageRoutingModule { }
