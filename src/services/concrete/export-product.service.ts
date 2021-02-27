import { Injectable } from '@nestjs/common';

import { ExportDataDTO } from '../../models/exports/export-product-dto';
import { SocketIoStrategy } from '../../strategy/socket-io.strategy';
import { IExportProductService } from '../abstract/i-export-product.service';

@Injectable()
export class ExportProductService implements IExportProductService {
  public async exportProductSalesChannelAccountIdEmit(
    socketIoStrategy: SocketIoStrategy,
    payload: ExportDataDTO,
  ): Promise<void> {
    const roomName: string = `${payload.channelId}-${payload.salesChannelAccountId}`;
    const room = socketIoStrategy.room(roomName, 'join');
    socketIoStrategy.emit<ExportDataDTO>(room, payload);
  }
}
