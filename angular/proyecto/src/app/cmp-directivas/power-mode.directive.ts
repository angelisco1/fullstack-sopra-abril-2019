import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {
  colores: Array<string> = ['blue', 'orange', 'red', 'green', 'yellow', 'black', 'grey'];
  @HostBinding('style.marginTop') top: string = '0px';
  @HostBinding('style.marginLeft') left: string = '0px';
  @HostBinding('style.color') color: string = 'black';

  constructor() { }

  @HostListener('input') onInput() {
    this.color = this.getRandomColor();
    this.top = '5px';
    this.left = '5px';
    setTimeout(() => {
      this.color = 'black';
      this.top = '0px';
      this.left = '0px';
    }, 300);
  }

  getRandomColor(): string {
    const pos = Math.floor(Math.random() * this.colores.length);
    return this.colores[pos];
  }
}
