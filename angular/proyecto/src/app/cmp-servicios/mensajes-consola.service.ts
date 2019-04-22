import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesConsolaService {

  constructor() { }

  mostrarMensaje(msg: string): void {
    console.log('MSG: ' + msg);
  }
}
