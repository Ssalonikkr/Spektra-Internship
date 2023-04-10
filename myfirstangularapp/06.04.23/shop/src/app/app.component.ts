import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  pro1show = false;
  pro1(){
    this.pro1show = !this.pro1show;
  }
  pro2show = false;
  pro2(){
    this.pro2show = !this.pro2show;
  }
  pro3show = false;
  pro3(){
    this.pro3show = !this.pro3show;
  }
}
