import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../iemployee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Iemployee[];
  constructor() { }

  ngOnInit() {
  }
  add(id,name,salary,department)
  {

    this.employee.push({'ID':id,'Name':name, 'Salary':salary, 'Department':department})
  }
}
