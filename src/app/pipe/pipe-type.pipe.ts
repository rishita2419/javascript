import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeType',
  pure:false
})
export class PipeTypePipe implements PipeTransform {
   x = [];
  transform(value:any, ...args: unknown[]): unknown {
    this.x = value.join(' ');
    return this.x;
  }

}
