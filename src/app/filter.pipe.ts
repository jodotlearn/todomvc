import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], type: string): any {
    switch(type) {
      // case 'All':
      //   return value;
      case 'Active':
        return value.filter(item => !item.done);
      case 'Completed':
        return value.filter(item => item.done);
      default:
        return value;
    }
  }

}
