import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ministore',
    pathMatch: 'full'
  },
  {
    path: 'ministore',
    loadChildren: () => import('./ministore/ministore/ministore.module').then( m => m.MinistorePageModule)
  },
  {
    path: 'countries-select',
    loadChildren: () => import('./shared/components/countries-select/countries-select.module').then( m => m.CountriesSelectPageModule)
  },
  {
    path: 'phone-otp',
    loadChildren: () => import('./shared/components/phone-otp/phone-otp.module').then( m => m.PhoneOtpPageModule)
  },
  {
    path: 'user-address',
    loadChildren: () => import('./user-address/user-address.module').then( m => m.UserAddressPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
