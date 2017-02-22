import { Component, OnInit, Input, OnChanges, SimpleChanges, 
          trigger, state, animate, style, transition
} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log('Changes: previous value=>', changes['showDetails'].previousValue);
    console.log('Changes: current value=>', changes['showDetails'].currentValue);
  }

}
