import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'humanReadable'
})
export class HumanReadablePipe implements PipeTransform {

  transform(value: string) {
    if ((typeof value) !== 'string') {
      return value;
    }
    value = value.split(/(?=[A-Z])/).join(' ');
    value = value[0].toUpperCase() + value.slice(1);
    return value;
  }

}

