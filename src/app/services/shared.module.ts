import { McurrencyPipe } from './../pipes/mcurrency/mcurrency.pipe';
import { NgModule } from '@angular/core';
import { FilterPipe } from '../pipes/filter/filter.pipe';
import { TimeStylePipe } from '../pipes/time-style/time-style.pipe';
import { SafeHtmlPipe } from '../pipes/safe-html/safe-html.pipe';

@NgModule({
  declarations: [McurrencyPipe, FilterPipe, TimeStylePipe, SafeHtmlPipe],
  exports: [McurrencyPipe, FilterPipe, TimeStylePipe, SafeHtmlPipe],
  providers: [McurrencyPipe, FilterPipe, TimeStylePipe, SafeHtmlPipe]
})
export class SharedModule { }
