import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  card='../assets/1.jpg';
  choice=false;

  show(){
    alert('Button clicked');
  }
}
