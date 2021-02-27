import { Module } from '@nestjs/common';

import { ExportProductProvider } from '../providers/export-product.provider';
import { ExportProductService } from '../services/concrete/export-product.service';

@Module({
  providers: [
    {
      provide: 'IAuthenticationService',
      useClass: ExportProductProvider,
    },
    {
      provide: 'IExportProductService',
      useClass: ExportProductService,
    },
  ],
})
export class ExportProductProviderModule {}
