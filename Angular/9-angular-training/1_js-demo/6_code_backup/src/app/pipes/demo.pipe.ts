import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString'
})
export class DemoPipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    console.log(value);
    console.log(args);
    
    return value.toUpperCase();
    return value.substr(args[0], args[1]) + `...`;
  }

}
