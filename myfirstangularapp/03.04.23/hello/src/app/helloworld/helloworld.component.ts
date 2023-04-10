import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  constructor() { }
    ngOnInit(): void {
    }
      name: string= "HELLO WORLD!!!";
      hello(): void{
        document.writeln(this.name+"<br />");
        document.write("Traditionally, Hello World programs are used to illustrate how the process of coding works, as well as to ensure that a language or system is operating correctly. They are usually the first programs that new coders learn, because even those with little or no experience can execute Hello World both easily and correctly");
    
      };
    }


