import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { GpuModule } from 'src/gpu/gpu.module';

@Module({
  imports: [CpuModule, GpuModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
