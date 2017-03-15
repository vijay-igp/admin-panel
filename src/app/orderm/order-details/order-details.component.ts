import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { UploadResult } from '../xlsx-file-upload/xlsx-file-upload.component';
import { BehaviorSubject } from 'rxjs';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent implements OnInit {
  public uploaderContent: BehaviorSubject<string> = new BehaviorSubject('please drop file in');
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

  public xlsxUploaded(result: UploadResult) {
    console.log('Result(after upload)=======> ', JSON.stringify(result));
    this.fileContents = JSON.stringify(result);
    // this.uploaderContent.next(JSON.stringify(result));
  }

  ngOnInit() {
    this.order = {};
    this.order['description'] = '';
    this.order['selectedStatus'] = '';
    console.log('XLSX object: ', XLSX);
  }

  uploadFile(event, index) {
    console.log('Target obj=>', event.target, index);
    this.fileContents = XLSX.read(event.target.data.d, {type: event.target.data.b ? 'binary' : 'base64'});
    
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
