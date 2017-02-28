import { Routes, RouterModule } from '@angular/router';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { FormValidationComponent } from './form/form.component';
import { OrdersListComponent } from './orderm/orders-list/orders-list.component';

const route: Routes = [
    { path: '', redirectTo: 'product_upload', pathMatch: 'full' },
    { path: 'product_upload', component: MetricsListComponent },
    { path: 'form', component: FormValidationComponent },
    { path: 'orders', component: OrdersListComponent }
]

export const routing = RouterModule.forRoot(route);
