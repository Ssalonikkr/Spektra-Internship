import { Component } from '@angular/core';

@Component({
  selector: 'app-techppllist',
  templateUrl: './techppllist.component.html',
  styleUrls: ['./techppllist.component.css']
})
export class TechppllistComponent {
  users = [
    { name: 'Soni', email: 'soni@example.com',mob: '12345' },
    { name: 'Jyoti', email: 'jyots@example.com', mob:'56743'},
    { name: 'Shobha', email: 'shobha@example.com',mob:'98765' },
  ];

}
