import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  // TODO: {{ "Minions ipsum bee do bee do bee do butt" | hideWords:['bee', 'butt'] }} => "Minions ipsum * do * do * do *"
  // TODO: {{ "Minions ipsum bee do bee do bee do butt" | hideWords:['bee', 'butt']:'$' }} => "Minions ipsum $ do $ do $ do $"
  transform(value: any, args?: any): any {
    return null;
  }

}
