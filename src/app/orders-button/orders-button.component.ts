import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-button',
  template: `<div class="btn btn-primary orders-button" [ngClass]="{'bg-igp text-white': isAlert, 'bg-grey text-black': !isAlert}">
                <div>8</div>
                <div>View Orders</div>
            </div>`,
  styles: [`.orders-button {
              margin-top: -5px;
              border-radius:0;
              width: 100%;
              min-width: 112px;
              font-size: 14px;
              font-weight: bold;
              text-align: center;
              border: none;
              box-shadow: 0 1px 3px #888888;
          }`]
})
export class OrdersButtonComponent implements OnInit {
  isAlert: Boolean;

  constructor() { }

  ngOnInit() {
    this.isAlert = false;
  }

}
