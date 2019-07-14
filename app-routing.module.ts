import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path:'Details',
    component:EmployeedetailsComponent
  },
  {
    path:'addEmployee',
    component:AddEmployeeComponent
  },
{
  path:'list',
  component:ListComponent
},
{
  path:'',redirectTo:'Details',
  pathMatch:'full'
},
{
path : 'details/:id',
component : ListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
