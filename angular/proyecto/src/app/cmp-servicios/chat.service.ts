import { Injectable, EventEmitter } from '@angular/core';
import { MensajesConsolaService } from './mensajes-consola.service';

interface IMsg {
  msg: string,
  user: string
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chat: Array<IMsg> = [
    {msg: 'Bienvenidos al chat', user: 'A'},
  ];
  mdEnviado = new EventEmitter<string>();

  constructor(private msgConsola: MensajesConsolaService) { }

  getChat() {
    return this.chat;
  }

  enviarMD(msg: string): void {
    this.mdEnviado.emit(msg);
  }

  addMsg(newMsg: IMsg): void {
    this.msgConsola.mostrarMensaje('Se ha añadido un nuevo mensaje');
    this.chat.push(newMsg);
  }
}
