import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  name: string;
  description: string;
  type: any = {name: ''};
  quantity: number;
  price: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Omkar';
  }

}
