import { Component, OnInit } from '@angular/core';
import { MensajesConsolaService } from './mensajes-consola.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css'],
  // providers: [MensajesConsolaService],
  // providers: [
  //   ChatService
  // ]
})
export class CmpServiciosComponent implements OnInit {

  constructor(private msgService: MensajesConsolaService) { }

  ngOnInit() {
  }

  saludar() {
    this.msgService.mostrarMensaje('Hola a todos');
    // alert('Hola a todos');
  }

}
