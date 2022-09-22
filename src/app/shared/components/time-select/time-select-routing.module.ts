import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeSelectPage } from './time-select.page';

const routes: Routes = [
  {
    path: '',
    component: TimeSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeSelectPageRoutingModule {}
