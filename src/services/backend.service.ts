import { Injectable, Type } from '@angular/core';

import { Logger } from 'services/logger.service';
import { Metric } from 'classes/metric';

const METRICS = [
        new Metric('Pending Lots', 18),
        new Metric('Pending Products', 341),
        new Metric('Backlogs', 236, 'days')
      ];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Metric) {
      // TODO get from the database
      return Promise.resolve<Metric[]>(METRICS);
    }
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
