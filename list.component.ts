import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Iemployee } from '../iemployee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
errorMessage:any;
  employee:Iemployee;
  employe:Iemployee;

  constructor(private route:ActivatedRoute,private employeeservice: EmployeeService) { }

  ngOnInit() {
    const param=this.route.snapshot.paramMap.get('i');
    if(param)
    {
      const i=+param;
      this.getemploye(i);
    }

  }
  getemploye(i)
  {
   

    this.employeeservice.getemploye(i).subscribe(
     employe=>this.employee=employe,
     error=>this.errorMessage=<any>error);
    
  }
  

}
