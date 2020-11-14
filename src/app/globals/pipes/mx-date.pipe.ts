import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mxDate'
})
export class MxDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
