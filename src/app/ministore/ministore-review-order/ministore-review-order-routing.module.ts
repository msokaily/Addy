import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistoreReviewOrderPage } from './ministore-review-order.page';

const routes: Routes = [
  {
    path: '',
    component: MinistoreReviewOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistoreReviewOrderPageRoutingModule {}
