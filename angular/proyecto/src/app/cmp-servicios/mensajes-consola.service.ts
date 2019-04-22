import { Injectable } from '@angular/core';

class MensajesConsolaFechaService {

  constructor() { }

  mostrarMensaje(msg: string): void {
    console.log(new Date().toDateString() + ' MSG: ' + msg);
  }
}


@Injectable({
  providedIn: 'root',
  useClass: MensajesConsolaFechaService
})
export class MensajesConsolaService {

  constructor() { }

  mostrarMensaje(msg: string): void {
    console.log('MSG: ' + msg);
  }
}
