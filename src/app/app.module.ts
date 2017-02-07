import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { LotRowComponent } from './lot-row/lot-row.component';

import { MetricService } from 'services/metric.service';
import { BackendService } from 'services/backend.service';
import { Logger } from 'services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MetricsListComponent,
    LotRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BackendService,
    MetricService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
