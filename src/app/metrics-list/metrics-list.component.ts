import { Component, OnInit } from '@angular/core';

import { Metric } from 'classes/metric';
import { MetricService } from 'services/metric.service';

@Component({
  selector: 'app-metrics-list',
  templateUrl: './metrics-list.component.html',
  styleUrls: ['./metrics-list.component.css'],
  providers:  [ MetricService ]
})
export class MetricsListComponent implements OnInit {
  metrics: Metric[];
  selectedMetric: Metric;
  testStr: String;

  constructor(private service: MetricService) { }

  ngOnInit() {
    this.metrics = this.service.getMetrics();
    // console.log('Metrics init=>', this.metrics);
    this.testStr = 'Hello';
  }

  selectMetric(metric: Metric) { 
    this.selectedMetric = metric;
    console.log('selectedMetric', this.selectedMetric);
  }

}
