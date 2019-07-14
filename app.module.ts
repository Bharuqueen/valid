import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ListComponent } from './list/list.component';
import { EfilterPipe } from './efilter.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    ListComponent,
    EfilterPipe,
    AddEmployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                                                                                                                                                                                                                                                                                                                
    HttpClientModule

  ],

providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
