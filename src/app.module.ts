import { Module } from '@nestjs/common';

import { ExportProductProviderModule } from './modules/export-product.module';

@Module({
  imports: [ExportProductProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
