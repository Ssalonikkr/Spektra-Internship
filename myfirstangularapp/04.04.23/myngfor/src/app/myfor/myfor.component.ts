import { Component } from '@angular/core';

@Component({
  selector: 'app-myfor',
  templateUrl: './myfor.component.html',
  styleUrls: ['./myfor.component.css']
})
export class MyforComponent {


    users = [
      { name: 'Soni', email: 'soni@example.com',mob: '12345' },
      { name: 'Jyoti', email: 'jyots@example.com', mob:'56743'},
      { name: 'Shobha', email: 'shobha@example.com',mob:'98765' },
    ];

}
