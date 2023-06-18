import { Module } from '@nestjs/common';
import { GpuService } from './gpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule],
  providers: [GpuService],
})
export class GpuModule {}
