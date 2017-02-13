import { Injectable } from '@angular/core';

import { Product } from 'classes/product';
import { BackendService } from 'services/backend.service';
import { Logger } from 'services/logger.service';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger
  ) { }

  getProducts() {
    this.backend.getAll(Product).then( (products: Product[]) => {
      this.logger.log(`Fetch all ${products.length} products.`);
      this.products.push(...products);
    });

    return this.products;
  }
}
