import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { IPutAnswer } from './dto/putAnswer.dto';
import { IRegisterStudent } from './dto/registerStudent.dto';

@WebSocketGateway({ cors: true })
export class TestMonitoringGateway {
  @WebSocketServer()
  wss: Server;

  @SubscribeMessage('registerStudentToServer')
  handleRegisterStudent(client: Socket, payload: IRegisterStudent): void {
    this.wss.emit('registerStudentToClient', payload);
  }

  @SubscribeMessage('putAnswerToServer')
  handlePutAnswer(client: Socket, payload: IPutAnswer): void {
    this.wss.emit('putAnswerToClient', payload);
  }
}
