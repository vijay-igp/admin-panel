import { Component, OnInit } from '@angular/core';

import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  allOrders = [
    {id: '000001', description: 'Order 1', status: 'Active', date: '11 January 2017'},
    {id: '000002', description: 'Order 2', status: 'Active', date: '15 January 2017'},
    {id: '000003', description: 'Order 3', status: 'Active', date: '15 January 2017'},
    {id: '000004', description: 'Order 4', status: 'Active', date: '22 January 2017'},
    {id: '000005', description: 'Order 5', status: 'Active', date: '26 January 2017'},
    {id: '000006', description: 'Order 6', status: 'Active', date: '05 February 2017'},
    {id: '000007', description: 'Order 7', status: 'Active', date: '12 February 2017'},
    {id: '000008', description: 'Order 8', status: 'Active', date: '18 February 2017'},
    {id: '000009', description: 'Order 9', status: 'Active', date: '21 February 2017'},
    {id: '000010', description: 'Order 10', status: 'Active', date: '24 February 2017'}
  ];
  fileName: string;

  constructor() { }

  ngOnInit() {
    console.log('OrdersListComponent called successfully', this.allOrders);
    console.log('Orders component: ', XLSX);
    
  }

  uploadFile(event) {
    console.log('Target obj=>', event);
    
    if(event.target.files && event.target.files[0]) {
      this.fileName = event.target.files[0].name;
      console.log('File name: ', this.fileName, ', path: ', event.target.value);
    }
  }

}
