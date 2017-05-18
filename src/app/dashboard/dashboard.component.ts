import { Component, OnInit } from '@angular/core';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { DashboardService } from 'services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dashboardData: Object;
  private masterData: Object;

  private isRowAlert: Object;

  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'ddth mmm. yyyy',
  };
  private dateRange: Object = { date: { year: 2017, month: 5, day: 10 } };

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.isRowAlert = this.dashboardService.getAlertRow();
    this.dashboardData = this.dashboardService.getDashboardData();
    this.masterData = this.dashboardService.getMasterData();
  }

  openPanel(e, status) {
    e.preventDefault();
    console.log('Side-panel opened for status: ', status);
  }

  onDateChanged(event: IMyDateModel) {
    console.log('Date changed');
    console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
  }

}
