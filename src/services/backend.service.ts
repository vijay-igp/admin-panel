import { Injectable, Type } from '@angular/core';

import { Logger } from 'services/logger.service';
import { Metric } from 'classes/metric';
import { Product } from 'classes/product';
import { LotData } from 'classes/lot-data';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

const METRICS = [
        new Metric('Pending Lots', 18),
        new Metric('Pending Products', 341),
        new Metric('Backlogs', 236, 'days')
      ];

@Injectable()
export class BackendService {
  constructor(private logger: Logger,
              private http: Http) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Metric) {
      // TODO get from the database
      return Promise.resolve<Metric[]>(METRICS);
    } 
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }

  getLotData(): Promise<LotData[]> {

    return this.http.get('assets/json/products.json')
              .toPromise()
              .then(response => response.json() as any[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('Error occurred', error);    
    return Promise.reject(error.message || error);
  }
}
