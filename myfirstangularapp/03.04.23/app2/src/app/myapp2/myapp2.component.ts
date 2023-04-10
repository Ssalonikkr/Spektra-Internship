import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myapp2',
  templateUrl: './myapp2.component.html',
  styleUrls: ['./myapp2.component.css']
})
export class Myapp2Component  implements OnInit{
  constructor() { }
    ngOnInit(): void {
    }
      reg(): void{
        
        alert("Successfully Registered");
      };
    }


