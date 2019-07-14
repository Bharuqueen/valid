import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iemployee } from './iemployee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl='./assets/emp.json';
  constructor(private http:HttpClient) { }
  getemployee(): Observable<Iemployee[]> {
    return this.http.get<Iemployee[]>(this.employeeUrl);
  } //
  getemploye(i:Number):
   Observable<Iemployee | undefined> 
  {
    return this.getemployee().pipe(map((employee:Iemployee[])=>employee.find(p=>p.ID===i)));
  }

}
