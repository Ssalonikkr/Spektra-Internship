import { Component } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp3',
  templateUrl: './emp3.component.html',
  styleUrls: ['./emp3.component.css']
})
export class Emp3Component {
  
  constructor(private service: EmpserviceService){

  }

}
