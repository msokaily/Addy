import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistoreListPage } from './ministore-list.page';

const routes: Routes = [
  {
    path: '',
    component: MinistoreListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistoreListPageRoutingModule {}
