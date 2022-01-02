import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  activeUsers$ = this.socket.fromEvent<any>('patientList');

  constructor(private socket: Socket) {
  }

  sendMessage(msg: any) {
    this.socket.emit('patientJoin', msg);
  }
  close() {
    this.socket.disconnect();
  }

  public userPing( userName): void {
    this.sendMessage(userName);
  }
}




