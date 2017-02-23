import { Injectable } from '@angular/core';

import { LotData } from 'classes/lot-data';
import { BackendService } from 'services/backend.service';
import { Logger } from 'services/logger.service';

@Injectable()
export class LotDataService {
  private lotItems: LotData[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getLotDetails() {
    this.backend.getLotData().then( (lotItems: LotData[]) => {
      this.logger.log(`Fetched ${lotItems.length} rows from lot.`);
      this.lotItems = lotItems;
      console.log('inside then of getLotDetails: ', this.lotItems);
    });
    
    console.log('before return of getLotDetails: ', this.lotItems);

    return this.lotItems;
  }

}
