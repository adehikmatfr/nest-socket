import { Module } from '@nestjs/common';

import { AppGateway } from './event.gateway';

 
@Module({
  providers: [AppGateway]
})
export class EventsModule {}