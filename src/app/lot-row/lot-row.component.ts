import { Component, OnInit } from '@angular/core';
import { LotDataService } from 'services/lot-data.service';
import { LotData } from 'classes/lot-data';

@Component({
  selector: 'app-lot-row',
  templateUrl: './lot-row.component.html',
  styleUrls: ['./lot-row.component.css']
})
export class LotRowComponent implements OnInit {
  showDetails = false;
  lotDetails: LotData[];

  constructor(private service: LotDataService) { }

  ngOnInit() {
  }
  
  loadLotDetails(event: Event) {
    event.stopPropagation();
    this.showDetails = !this.showDetails;

    if(!this.lotDetails) {
      // this.lotDetails = this.service.getLotData();
      this.service.getLotData().then( (lotItems: LotData[]) => {
        // this.logger.log(`Fetched ${lotItems.length} rows from lot.`);
        this.lotDetails = lotItems;
        console.log('inside then of getLotDetails: ', this.lotDetails);
      });
    }

  }

}
