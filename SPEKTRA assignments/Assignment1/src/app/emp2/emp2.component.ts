import { Component } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component {
  constructor(private service: EmpserviceService){}

}
