import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  details ='Employee Details';

  constructor(private router:Router){}
  getEmp1()
  {
    this.router.navigate(['emp1']);
  }
  getEmp2()
  {
    this.router.navigate(['emp2']);
  }
  getEmp3()
  {
    this.router.navigate(['emp3']);
  }

}
