import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { GpuService } from '../gpu/gpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private readonly cpuService: CpuService,
    private readonly gpuService: GpuService,
  ) {}

  @Get()
  boot() {
    return [this.cpuService.compute(), this.gpuService.render()];
  }
}
