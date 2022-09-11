import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mcurrency'
})
export class McurrencyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return `${args[0] || 'AED'} ${value}`;
  }

}
