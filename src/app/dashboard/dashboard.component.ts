import { Component, OnInit } from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'ddth mmm. yyyy',
  };
  private dateRange: Object = { date: { year: 2017, month: 5, day: 10 } };

  constructor() { }

  ngOnInit() {
  }

  openPanel(e, status) {
    e.preventDefault();
    console.log('Side-panel opened for status: ', status);
  }

}
