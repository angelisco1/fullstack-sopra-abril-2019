import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {
  colorFondoPorDefecto: string = 'white';
  @Input('appMarcar') colorFondo: string = 'red';
  @HostBinding('style.backgroundColor') color: string;

  constructor(private elemRef: ElementRef) {
    // No lo ponemos aquí porque no ha obtenido todavía el valor de colorFondo que recibe en la etiqueta.
    // elemRef.nativeElement.style.backgroundColor = this.colorFondo;
  }

  ngOnInit() {
    // Aquí ya se ha inicializado la propiedad colorFondo con el valor que recibe en la etiqueta HTML.
    // this.elemRef.nativeElement.style.backgroundColor = this.colorFondo;
    this.colorFondo = this.colorFondo ? this.colorFondo : 'red';
  }

  @HostListener('mouseover') onMouseOver() {
    console.log(this.colorFondo)
    this.pintar(this.colorFondo);
  }

  @HostListener('mouseout') onMouseOut() {
    this.pintar(this.colorFondoPorDefecto);
  }

  pintar(color: string) {
    this.color = color;
  }
}