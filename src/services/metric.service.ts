import { Injectable } from '@angular/core';

import { Metric } from 'classes/metric';
import { BackendService } from 'services/backend.service';
import { Logger } from 'services/logger.service';

@Injectable()
export class MetricService {
  private metrics: Metric[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getMetrics() {
    this.backend.getAll(Metric).then( (metrics: Metric[]) => {
      // this.logger.log(`Fetched ${metrics.length} metrics.`);
      this.metrics.push(...metrics); // fill cache
    });
    return this.metrics;
  }
}
