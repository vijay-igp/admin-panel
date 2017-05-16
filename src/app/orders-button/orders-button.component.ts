import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-button',
  template: `<div class="btn btn-primary orders-button" [ngClass]="{'bg-igp text-white': isAlert, 'bg-grey text-black': !isAlert, 'text-bold': orderStatus === 'new'}">
                <div>{{displayData.ordersCount}}</div>
                <div>{{displayData.displayStr}}</div>
            </div>`,
  styles: [`.orders-button {
              margin-top: -5px;
              border-radius:0;
              width: 100%;
              min-width: 112px;
              font-size: 14px;
              text-align: center;
              border: none;
              box-shadow: 0 1px 3px #888888;
          }`]
})
export class OrdersButtonComponent implements OnInit {
  @Input('displayData') displayData: Object;
  @Input('orderStatus') orderStatus: string;
  @Input('deliveryTime') deliveryTime: string;
  
  isAlert: Boolean;
  ordersCount: number;
  displayStr: string;

  constructor() { }

  ngOnInit() {
    console.log('displayData>>>', this.displayData, ', ', this.orderStatus, ', ', this.deliveryTime);
    this.isAlert = false;    
  }

}
