import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'report', component: ReportComponent},  

]
@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
