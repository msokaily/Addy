import { McurrencyPipe } from './../pipes/mcurrency/mcurrency.pipe';
import { NgModule } from '@angular/core';
import { FilterPipe } from '../pipes/filter/filter.pipe';

@NgModule({
  declarations: [McurrencyPipe, FilterPipe],
  exports: [McurrencyPipe, FilterPipe],
  providers: [McurrencyPipe, FilterPipe]
})
export class SharedModule { }
