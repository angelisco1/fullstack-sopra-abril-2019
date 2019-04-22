import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  // {{ "Minions ipsum bee do bee do bee do butt" | hideWords:['bee', 'butt'] }} => "Minions ipsum * do * do * do *"
  // {{ "Minions ipsum bee do bee do bee do butt" | hideWords:['bee', 'butt']:'$' }} => "Minions ipsum $ do $ do $ do $"
  transform(value: string, arg1: Array<string>, arg2?: string): string {
    // return this.conIncludes(value, arg1, arg2);
    return this.conRegExp(value, arg1, arg2);
  }

  conRegExp(value: string, arg1: Array<string>, arg2?: string): string {
    let res = value;
    let charOculto = arg2 ? arg2 : '*';

    for (let palabraAOcultar of arg1) {
      let reg = new RegExp(palabraAOcultar, 'g');
      res = res.replace(reg, charOculto.repeat(palabraAOcultar.length));
    }

    return res;
  }

  conIncludes(value: string, arg1: Array<string>, arg2?: string): string {
    let res = [];
    let charOculto = arg2 ? arg2 : '*';
    let arrPalabras = value.split(" ");

    for (let palabra of arrPalabras) {
      if (arg1.includes(palabra)) {
        res.push(charOculto.repeat(palabra.length));
      } else {
        res.push(palabra);
      }
    }

    return res.join(" ");
  }

}
