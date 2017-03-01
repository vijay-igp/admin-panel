import { Routes, RouterModule } from '@angular/router';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { FormValidationComponent } from './form/form.component';
import { OrdersListComponent } from './orderm/orders-list/orders-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from 'services/auth-guard.service';

const route: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'product_upload', component: MetricsListComponent },
    { path: 'form', component: FormValidationComponent },
    { path: 'orders', component: OrdersListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(route);
