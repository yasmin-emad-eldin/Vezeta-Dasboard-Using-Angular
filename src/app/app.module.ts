import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { IntroPageComponent } from './component/intro-page/intro-page.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SummaryComponent } from './component/summary/summary.component';
import { OverviewComponent } from './component/overview/overview.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './component/tables/tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
// import { AdminprofileComponent } from './component/AdminProfile/adminprofile/adminprofile.component';
import { Dashboard1Component } from './component/try dasbord/dashboard1/dashboard1.component';
import { ChartbarComponent } from './component/chart/barchart/bar-chart/chartbar/chartbar/chartbar.component';
import{BarChartComponent} from './component/chart/barchart/bar-chart/bar-chart.component';
import { HoverchartComponent } from './component/chart/barchart/bar-chart/hoverchart/hoverchart/hoverchart.component';
import { DoctorsComponent } from './component/tables/tables/doctors/doctors/doctors.component';
import { UsersComponent } from './component/tables/users/users/users.component';
import { TestComponent } from './component/testt/test/test.component';
import { AddAdminComponent } from './component/admin/addAdmin/add-admin/add-admin.component';
import { AdminprofileComponent } from './component/admin/adminprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Addadmin2Component } from './component/admin/testaddAdmin/addadmin2/addadmin2.component';
// import { FileSelectDirective } from 'ng2-file-upload';
import { FileSelectDirective } from'ng2-file-upload'
import { DoctorprofileComponent } from './component/doctorprofile/doctorprofile/doctorprofile.component';
import { RealuserComponent } from './component/tables/tables/realuser/realuser/realuser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroPageComponent,
    RegistrationComponent,
    LoginComponent,
    SidebarComponent,
    SummaryComponent,
    OverviewComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    AdminprofileComponent,
    Dashboard1Component,
    ChartbarComponent,
    BarChartComponent,
    HoverchartComponent,
    DoctorsComponent,
    UsersComponent,
    TestComponent,
    AddAdminComponent,
    Addadmin2Component,
    DoctorprofileComponent,
    RealuserComponent,
  ],
  imports: [FormsModule,
     ReactiveFormsModule,
     BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     FormsModule,
     Ng2SearchPipeModule,
     NgxPaginationModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
