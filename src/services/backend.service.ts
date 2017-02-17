import { Injectable, Type } from '@angular/core';

import { Logger } from 'services/logger.service';
import { Metric } from 'classes/metric';
import { Product } from 'classes/product';

const METRICS = [
        new Metric('Pending Lots', 18),
        new Metric('Pending Products', 341),
        new Metric('Backlogs', 236, 'days')
      ];
      // ,
      // PRODUCTS = [
      //   new Product('Cake', 'Chocolate cake', 2, 'type1', 600, '1kg'),
      //   new Product('Flowers', 'Bouquet of flowers', 10, 'type2', 390, '240gms'),
      //   new Product('Watch', 'Rolex wrist watch', 1, 'type3', 100000, '100gms')
      // ];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Metric) {
      // TODO get from the database
      return Promise.resolve<Metric[]>(METRICS);
    } 
    // else if (type === Product) {
    //   return Promise.resolve<Product[]>(PRODUCTS);
    // }
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
