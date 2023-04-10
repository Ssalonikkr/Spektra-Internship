import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: any[] = [
    {
        ID: '1', FirstName: 'Soni', LastName: 'Kumari',
        DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234
    },
    {
        ID: '2', FirstName: 'Anurag', LastName: 'Singh',
        DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666
    },
    {
        ID: '3', FirstName: 'Priyanka', LastName: 'CS',
        DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543
    },
    {
        ID: '4', FirstName: 'Rina', LastName: 'Sharma',
        DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000
    },
    {
        ID: '5', FirstName: 'Mohit', LastName: 'Singh',
        DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876
    },
    {
        ID: '6', FirstName: 'Rohit', LastName: 'Singh',
        DOB: '4/12/1993', Gender: 'Male', CourseFee: 9876
    }
];
getCount(): number {
    return this.students.length;
}
getMaleCount(): number {
    return this.students.filter(std => std.Gender === 'Male').length;
}
getFemaleCount(): number {
    return this.students.filter(std => std.Gender === 'Female').length;
}
}
