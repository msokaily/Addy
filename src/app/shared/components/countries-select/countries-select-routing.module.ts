import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesSelectPage } from './countries-select.page';

const routes: Routes = [
  {
    path: '',
    component: CountriesSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesSelectPageRoutingModule {}
