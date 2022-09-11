import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistoreFilterPage } from './ministore-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MinistoreFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistoreFilterPageRoutingModule {}
