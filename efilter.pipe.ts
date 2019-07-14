import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'efilter'
})
export class EfilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((data) => data.Name.indexOf(args) !== -1);
  
  }

}
