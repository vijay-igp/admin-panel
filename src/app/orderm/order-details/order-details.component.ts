import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: any;
  selectedStatus: string = '';
  orderStatuses = [
      {id: 'active', name: 'Active'},
      {id: 'pending', name: 'Pending'},
      {id: 'cancelled', name: 'Cancelled'}
  ];
  fileName: string;
  fileContents: any;

  constructor() { }

  ngOnInit() {
    this.order = {};
    this.order['description'] = '';
    this.order['selectedStatus'] = '';
  }

  uploadFile(event, index) {
    console.log('Target obj=>', event, index);
    
    if(event.target.files && event.target.files[0]) {
      this.fileName = event.target.files[0].name;
      console.log('File name: ', this.fileName, ', path: ', event.target.value);
    }
  }

  fileClick(event, index) {
    console.log('fileClick event ==>', event, index);
  }

  saveOrder() {

  }

}
