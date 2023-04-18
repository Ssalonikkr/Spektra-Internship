import { Component,OnInit } from '@angular/core';
import { PserviceService } from '../pservice.service';
import { items } from '../items';

@Component({
  selector: 'app-protable',
  templateUrl: './protable.component.html',
  styleUrls: ['./protable.component.css']
})
export class ProtableComponent implements OnInit{

  productDetails!:items[];
  constructor(private productsData:PserviceService){
    this.productDetails=productsData.getDetails();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.'); 
}
}