import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trustedURL'
})
export class TrustedURLPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
