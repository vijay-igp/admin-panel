import { Injectable } from '@angular/core';

import { LotData } from 'classes/lot-data';
import { BackendService } from 'services/backend.service';
import { Logger } from 'services/logger.service';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LotDataService {
  private lotItems: LotData[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger,
    private http: Http) { }

  getLotData(): Promise<LotData[]> {

    return this.http.get('assets/json/lot-data.json')
              .toPromise()
              .then(response => response.json() as any[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('Error occurred', error);    
    return Promise.reject(error.message || error);
  }

}
