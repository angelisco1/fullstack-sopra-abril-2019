import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgs = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqrtwszxIOJa6h92wr5ZG5KEl1rvEUmYNIb5XJ_jPBng4pvSB',
    'https://i.imgflip.com/9ehk.jpg',
    'https://s03.s3c.es/imag/_v0/770x420/5/0/9/700x420_JULIO-IGLESIAS-MEME.jpg'
  ];
  img = this.imgs[0];
  textoAr = "Arriba"
  textoAb = "Abajo"

  cambiarTextoAr(txt) {
    this.textoAr = txt;
  }

  cambiarTextoAb(txt) {
    this.textoAb = txt;
  }

  cambiarImgUrl(src) {
    this.img = src;
  }

}
