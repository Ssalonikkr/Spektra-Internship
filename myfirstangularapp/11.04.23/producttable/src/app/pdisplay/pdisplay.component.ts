import { Component,OnInit } from '@angular/core';
import { PserviceService } from '../pservice.service';
import { items } from '../items';

@Component({
  selector: 'app-pdisplay',
  templateUrl: './pdisplay.component.html',
  styleUrls: ['./pdisplay.component.css'],
  providers:[PserviceService]
})
export class PdisplayComponent implements OnInit {
  cartData!:items[];
    constructor(private cartDetails:PserviceService){
   this.cartData=this.cartDetails.getDetails();
   this.calculateTotal();
    }
    ngOnInit(): void {
        
    }
    totalQuantity:number=0;
    totalPrice:number=0;
    calculateTotal(): void {
      let totalQty = 0;
      let totalPrice = 0;
      for (const item of this.cartData) {
        totalQty += item.qty;
        totalPrice += item.price;
      }
      this.totalQuantity = totalQty;
      this.totalPrice = totalPrice;
    }
  }

