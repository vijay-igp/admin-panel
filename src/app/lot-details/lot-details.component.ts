import { Component, OnInit, Input, OnChanges, SimpleChanges, 
          trigger, state, animate, style, transition
} from '@angular/core';

import { LotData } from 'classes/lot-data';

@Component({
  selector: 'app-lot-details',
  templateUrl: './lot-details.component.html',
  styleUrls: ['./lot-details.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ opacity: 1, display: 'block' })),
      state('false', style({ opacity: 0, display: 'none' })),
      transition('0 => 1', animate('.8s')),
      transition('1 => 0', animate('.3s'))
      // transition('* => *', [animate('.5s', style({ transition: 'height 500ms' })), animate('500ms')])
    ])
  ]
})
export class LotDetailsComponent implements OnInit {
  @Input() showDetails: boolean;
  @Input() lotDetails: any;

  currentLotDetails = new LotData();

  constructor() { }

  ngOnInit() {
    console.log('showDetails: ', this.showDetails);
    console.log('lotDetails: ', this.lotDetails);    
  }

  ngOnChanges(changes: SimpleChanges) {

    if(changes['lotDetails'] && changes['lotDetails'].currentValue && changes['lotDetails'].currentValue.length>0) {
      this.currentLotDetails = changes['lotDetails'].currentValue[0];
      console.log('lotDetails: =>', this.currentLotDetails);
    }
    // console.log('Changes: current value=>', changes['showDetails'].currentValue);
  }

}
