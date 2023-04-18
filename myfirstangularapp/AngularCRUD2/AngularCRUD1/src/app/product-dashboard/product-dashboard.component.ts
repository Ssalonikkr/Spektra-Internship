import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ProductModel } from './product-dashboard.model';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit{

  formValue !:FormGroup;
  productModelObj : ProductModel = new ProductModel();
  productData !: any;
  row : any;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService){}

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      productName : [''],
      quantity : [''],
      price : ['']
    })
    this.getAllProduct();
  }
  postProductDetails(){
    this.productModelObj.productName = this.formValue.value.productName;
    this.productModelObj.quantity = this.formValue.value.quantity;
    this.productModelObj.price = this.formValue.value.price;

    this.api.postProduct(this.productModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product Added Successfully")
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formValue.reset();
      window.location.reload();
    })
  }
  getAllProduct() {
    
    this.api.getProduct(DataView)
    .subscribe(res=>{
     this.productData = res;
    })
  }
  deleteProduct(row : any){
    this.api.deleteProduct(row.id)
    .subscribe(res=>{
      alert("Product deleted!!!")
      this.getAllProduct()
    })

  }
  onEdit(row: any){
    this.productModelObj.id = row.id;
    this.formValue.controls['productName'].setValue(row.productName);
    this.formValue.controls['quantity'].setValue(row.quantity);
    this.formValue.controls['price'].setValue(row.price);
    
  }
  updateProductDetails(){
    
    this.productModelObj.productName = this.formValue.value.productName;
    this.productModelObj.quantity = this.formValue.value.quantity;
    this.productModelObj.price = this.formValue.value.price;

    this.api.updateProduct(this.productModelObj,this.productModelObj.id)
    .subscribe(res=>{
      alert("Successfully Updated")
      this.getAllProduct()
      
    })
    this.formValue.reset();
  }

}
