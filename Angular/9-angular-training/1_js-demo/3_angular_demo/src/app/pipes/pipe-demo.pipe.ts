import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArr'
})
export class PipeDemoPipe implements PipeTransform {

  transform(arrNum: number[], ...args: number[]): number[] {
    if (args[0] === 0) {
      return arrNum.filter((item) => item % 2 === 0);
    }
    return arrNum.filter((item) => item % 2 !== 0);
  }

}
