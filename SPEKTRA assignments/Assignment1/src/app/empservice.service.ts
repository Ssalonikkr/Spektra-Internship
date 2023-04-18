import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  employees=[{id:1, name:'Saloni Kumari', designation:'Dev Intern'},
             {id:1, name:'Saloni Kumari', designation:'Dev Intern'},
             {id:1, name:'Saloni Kumari', designation:'Dev Intern'}
]

  constructor() { }

  getEmployees(){
    return this.employees;
  }
}
