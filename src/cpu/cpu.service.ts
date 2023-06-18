import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private readonly powerService: PowerService) {}

  compute(): string {
    this.powerService.supplyPower(50);

    return 'Computing';
  }
}
