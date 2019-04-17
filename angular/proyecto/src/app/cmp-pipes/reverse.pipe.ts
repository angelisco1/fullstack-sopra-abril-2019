import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // {{ "Hola" | reverse }} tiene que mostrar aloH
    // let res = '';
    // for (var pos = value.length-1; pos >= 0; pos--) {
    //   res += value[pos];
    // }
    // return res;
    // let res = value.split("");
    // res = res.reverse();
    // res = res.join("");
    // return res;
    return value.split("").reverse().join("");
  }
}
