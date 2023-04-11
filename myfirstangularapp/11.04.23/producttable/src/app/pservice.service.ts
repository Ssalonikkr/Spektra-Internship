import { Injectable } from '@angular/core';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {
  
  constructor() { }
  productDetails!:items[];
  getDetails():items[]{
    
    this.productDetails=[
    {id:"1",itemName:"T-Shirt",type:"Men's Wear",price:150,qty:5},
    {id:"2",itemName:"School Bag",type:"Bags",price:2020,qty:3},
    {id:"3",itemName:"Shirt",type:"Men's Wear",price:1400,qty:4},
    {id:"4",itemName:"Cricket Bat",type:"Bat",price:250,qty:4},
    {id:"5",itemName:"Pant",type:"Men's Wear",price:180,qty:4},
  ]
  return this.productDetails
}
}


