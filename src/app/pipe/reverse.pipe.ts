import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
   x :string="";
  transform(value: string, ...args: string[]) {

    this.x = value.split('').reverse().join('')

    return this.x;
  }

}
