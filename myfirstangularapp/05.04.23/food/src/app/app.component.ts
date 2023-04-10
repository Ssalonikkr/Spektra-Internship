import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';
  constructor(private router:Router){}
  GetNorth()
  {
    this.router.navigate(['north']);
  }
  GetSouth()
  {
    this.router.navigate(['/south']);
  }
}
