import { ExportDataDTO } from '../../models/exports/export-product-dto';
import { SocketIoStrategy } from '../../strategy/socket-io.strategy';

export interface IExportProductService{
    exportProductSalesChannelAccountIdEmit(
     strategy: SocketIoStrategy,
     payload: ExportDataDTO
    ): Promise<void>
}