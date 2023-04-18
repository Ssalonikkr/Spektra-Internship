import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ EmployeeServiceService]
})
export class AppComponent {
  title = 'Services';
  employees!:any[];
  constructor(private employeeService: EmployeeServiceService){}
  displayEmployee():any[]{
    this.employees=this.employeeService.getEmployees();
    return this.employees;
  }
}
