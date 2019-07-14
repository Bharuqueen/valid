import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Iemployee } from '../iemployee';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  efilter: Iemployee[];
  [x: string]: any;
  title = 'valid';
  index:number;
  employee: Iemployee[];
  getemployee:any;
    constructor( private route:ActivatedRoute,private employeeservice: EmployeeService)
  {

  }

  ngOnInit() { 
  
    this.employeeservice.getemployee().subscribe( //for json 
      data=>

      
        this.employee=data
   
      
      
      );
      
       
    }
    
  
    delete(i: number) {
      this.employee.splice(i, 1);
  }
  
  add(id,name,salary,department)
  {
    this.employee.push({'ID':id,'Name':name, 'Salary':salary, 'Department':department})
  }
  update(i:number, id, name,salary,department)
  {
    this.index=i;
    id.value=this.employee[i].ID;
    name.value=this.employee[i].Name;
    salary.value=this.employee[i].Salary;
    department.value=this.employee[i].Department;
 }
  updateclick(eid, ename, esalary, edepartment)
  {
    this.employee[this.index].ID=eid.value;
    this.employee[this.index].Name=ename.value;
    this.employee[this.index].Salary=esalary.value;
    this.employee[this.index].Department=edepartment.value;
  
  }

  }


