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
  
  loadLotDetails() {
    console.log('load details executed...');
    this.showDetails = !this.showDetails;
    this.lotDetails = this.service.getLotDetails();

    setTimeout(() => {
      console.log('executed inside timeout');
      console.log('lot details list: ', this.lotDetails);
    }, 1000);
    
  }

}
