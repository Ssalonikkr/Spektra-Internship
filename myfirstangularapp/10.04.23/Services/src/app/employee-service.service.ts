import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employees =  
    [{
      id: 1,
      name: 'Soni Kumari',
      email: 'soni@gmail.com'
    },
     {
      id: 2,
      name: 'Saloni Kumari',
      email: 'saloni@gmail.com'
    },
     {
      id: 3,
      name: 'Kuhu Singh',
      email: 'kuhu@gmail.com'
    },
     {
      id: 4,
      name: 'Jyoti Rani',
      email: 'jyoti@gmail.com'
    },
     {
      id: 5,
      name: 'Shobha Rani',
      email: 'shobha@gmail.com'
    }
  ];

  getEmployees(){
    return this.employees;
  }
}
