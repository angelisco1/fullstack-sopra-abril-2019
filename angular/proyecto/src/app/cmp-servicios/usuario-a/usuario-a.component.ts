import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-usuario-a',
  templateUrl: './usuario-a.component.html',
  styleUrls: ['./usuario-a.component.css'],
  // providers: [
  //   ChatService
  // ]
})
export class UsuarioAComponent implements OnInit {
  mensajesChat = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.mensajesChat = this.chatService.getChat();
  }

  enviarMensaje(texto: string): void {
    this.chatService.addMsg({msg: texto, user: 'A'});
  }

  enviarMensajeDirecto(texto: string): void {
    this.chatService.enviarMD(texto);
  }
}
