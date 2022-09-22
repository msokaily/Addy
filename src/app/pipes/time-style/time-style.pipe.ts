import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'timeStyle'
})
export class TimeStylePipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): unknown {
    return this.sanitized.bypassSecurityTrustHtml(value.toLowerCase()
      .replace('am', `<span style="color: rgba(37, 37, 37, 0.6); font-size: 14px;">am</span>`)
      .replace('pm', `<span style="color: rgba(37, 37, 37, 0.6); font-size: 14px;">pm</span>`));
  }

}
