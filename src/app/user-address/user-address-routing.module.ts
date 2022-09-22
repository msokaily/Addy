import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddressPage } from './user-address.page';

const routes: Routes = [
  {
    path: '',
    component: UserAddressPage
  },
  {
    path: 'address/:id',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'address-details',
    loadChildren: () => import('./address-details/address-details.module').then( m => m.AddressDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAddressPageRoutingModule {}
