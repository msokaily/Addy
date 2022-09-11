import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistoreListItemPage } from './ministore-list-item.page';

const routes: Routes = [
  {
    path: '',
    component: MinistoreListItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistoreListItemPageRoutingModule {}
