import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // imgUrl = 'https://i.imgflip.com/12dxv.jpg';
  textoAr = "Arriba"
  textoAb = "Abajo"

  cambiarTextoAr(txt) {
    this.textoAr = txt;
  }

  cambiarTextoAb(txt) {
    this.textoAb = txt;
  }

}
