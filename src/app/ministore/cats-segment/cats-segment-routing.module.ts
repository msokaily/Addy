import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatsSegmentPage } from './cats-segment.page';

const routes: Routes = [
  {
    path: '',
    component: CatsSegmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsSegmentPageRoutingModule {}
