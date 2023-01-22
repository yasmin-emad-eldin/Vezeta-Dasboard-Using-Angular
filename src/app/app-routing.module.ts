import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './component/intro-page/intro-page.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { TablesComponent } from './component/tables/tables/tables.component';
import { AdminprofileComponent } from './component/admin/adminprofile.component';
import { Dashboard1Component } from './component/try dasbord/dashboard1/dashboard1.component';
import { BarChartComponent } from './component/chart/barchart/bar-chart/bar-chart.component';
import { ChartbarComponent } from './component/chart/barchart/bar-chart/chartbar/chartbar/chartbar.component';
import { TestComponent } from './component/testt/test/test.component';
import { PaypalComponent } from './component/paypal/paypal/paypal.component';
import { Addadmin2Component } from './component/admin/testaddAdmin/addadmin2/addadmin2.component';
import { AddAdminComponent } from './component/admin/addAdmin/add-admin/add-admin.component';
import { DoctorprofileComponent } from './component/doctorprofile/doctorprofile/doctorprofile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'log-out', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adminprofile', component:AdminprofileComponent},
  { path: 'dashboard1', component: Dashboard1Component },
  { path: 'pipchart', component:BarChartComponent},
  { path: 'barchart', component:  ChartbarComponent},
  { path: 'test', component:TestComponent},
  { path: 'paypal', component:PaypalComponent},
  { path: 'AddAdmin', component:Addadmin2Component},
  { path: 'AddAdmin1',component:AddAdminComponent},
  { path:'Doctorprofile',component:DoctorprofileComponent
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
