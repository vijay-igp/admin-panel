// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ng2-bootstrap';
import { SelectModule } from 'ng2-select';
import { MyDatePickerModule } from 'mydatepicker';

// used to create fake backend
import { fakeBackendProvider } from 'helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// Router and Services
import { routing } from "./app.routing";
import { BackendService } from 'services/backend.service';
import { Logger } from 'services/logger.service';
import { AuthenticationService } from 'services/authentication.service';
import { AuthGuard } from 'services/auth-guard.service';
import { UserService } from 'services/user.service';
import { DashboardService } from 'services/dashboard.service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HeaderTabsComponent } from './header-tabs/header-tabs.component';
import { FooterComponent } from './footer/footer.component';
import { OrdersButtonComponent } from './orders-button/orders-button.component';
import { ButtonViewComponent } from './button-view/button-view.component';
import { NoOrdersComponent } from './no-orders/no-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    MainHeaderComponent,
    HeaderTabsComponent,
    FooterComponent,
    OrdersButtonComponent,
    ButtonViewComponent,
    NoOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BsDropdownModule.forRoot(),
    SelectModule,
    MyDatePickerModule
  ],
  providers: [
    BackendService,
    Logger,
    AuthenticationService,
    AuthGuard,
    UserService,
    DashboardService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
