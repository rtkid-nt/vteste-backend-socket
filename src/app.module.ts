import { Module } from '@nestjs/common';
import { TestMonitoringGateway } from './test-monitoring.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [TestMonitoringGateway],
})
export class AppModule {}
