import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.css']
})
export class SdetailsComponent {
 
  @Input()
  all: number=0;
  @Input()
  male: number=0;
  @Input()
  female: number=0;

}
