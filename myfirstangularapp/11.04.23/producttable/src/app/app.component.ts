import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'producttable';
  constructor(private router:Router){}
  ngOnInit(): void {
      
  }
  getProduct(){
    this.router.navigate(['protable']);
  }
  getCart(){
    this.router.navigate(['pdisplay']);
  }

}
