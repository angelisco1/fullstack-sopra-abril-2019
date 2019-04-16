import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() textoArriba = '';
  @Input() textoAbajo = '';
  imgUrl = 'https://i.imgflip.com/12dxv.jpg';
  constructor() { }

  ngOnInit() {
  }

}
