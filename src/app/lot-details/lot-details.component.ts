import { Component, 
          OnInit, 
          Input, 
          OnChanges, 
          SimpleChanges ,
          trigger,
          state,
          animate,
          style,
          transition
} from '@angular/core';

@Component({
  selector: 'app-lot-details',
  templateUrl: './lot-details.component.html',
  styleUrls: ['./lot-details.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1, display: 'block' })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class LotDetailsComponent implements OnInit {
  visibility = 'shown';

  @Input() showDetails: boolean; 

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.visibility = this.showDetails ? 'shown' : 'hidden';

    console.log('Changes: previous value=>', changes['showDetails'].previousValue);
    console.log('Changes: current value=>', changes['showDetails'].currentValue);
  }

}
