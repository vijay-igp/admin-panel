import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { FileUploadModule } from "ng2-file-upload";
import { XlsxFileUploadComponent } from './xlsx-file-upload/xlsx-file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FileUploadModule
  ],
  declarations: [
    OrdersListComponent,
    OrdersComponent,
    OrderDetailsComponent,
    XlsxFileUploadComponent
  ]
})
export class OrdermModule { }
