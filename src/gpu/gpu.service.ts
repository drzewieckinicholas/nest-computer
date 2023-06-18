import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class GpuService {
  constructor(private readonly powerService: PowerService) {}
}
