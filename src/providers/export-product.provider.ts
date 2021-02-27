import { Inject, Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { ExportDataDTO } from '../models/exports/export-product-dto';
import { IExportProductService } from '../services/abstract/i-export-product.service';
import { SocketIoStrategy } from '../strategy/socket-io.strategy';

@WebSocketGateway({ namespace: 'ok', transports: ['websocket'] })
export class ExportProductProvider
  implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    @Inject('IExportProductService')
    protected exportProductService: IExportProductService,
  ) {}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('export')
  async handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() payload: ExportDataDTO,
  ): Promise<void> {
    const strategy: SocketIoStrategy = new SocketIoStrategy(socket);
    await this.exportProductService.exportProductSalesChannelAccountIdEmit(strategy, payload);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
