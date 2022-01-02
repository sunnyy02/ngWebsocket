import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../service/web-socket.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  activeUsers$ = this.service.activeUsers$;
  constructor(private service: WebSocketService) { }

  ngOnInit() {
  }
}
