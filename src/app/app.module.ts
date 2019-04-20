import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarsComponent } from './cars/cars.component';
import { ReportComponent } from './report/report.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CarsAddComponent } from './cars/cars-add/cars-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'report', component: ReportComponent},  
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarsComponent,
    ReportComponent,
    CarsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
