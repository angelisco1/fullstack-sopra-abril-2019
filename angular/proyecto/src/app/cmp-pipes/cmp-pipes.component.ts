import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  nombre: string = "Calcetines de minions";

  descripcion: string = "Minions ipsum bee do bee do bee do butt pepete me want bananaaa! Tulaliloo tulaliloo para tú bananaaaa bee do bee do bee do tank yuuu! Belloo! Bananaaaa uuuhhh bee do bee do bee do bee do bee do bee do wiiiii chasy hahaha bappleees hana dul sae bee do bee do bee do.";

  precio: number = 3.6;

  fechaVenta: Date = new Date(2019, 3, 18);


  constructor() { }

  ngOnInit() {
  }

}
