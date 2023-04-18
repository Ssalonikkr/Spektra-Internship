import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit{

  formValue !:FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  row : any;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService){}

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      firstname : [''],
      lastname : [''],
      email : [''],
      mobile : [''],
      salary : [''],
      designation : ['']
    })
    this.getAllEmployee();
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstname = this.formValue.value.firstname;
    this.employeeModelObj.lastname = this.formValue.value.lastname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.employeeModelObj.designation = this.formValue.value.designation;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("User Added Successfully")
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formValue.reset();
      window.location.reload();
    })
  }
  getAllEmployee() {
    
    this.api.getEmployee(DataView)
    .subscribe(res=>{
     this.employeeData = res;
    })
  }
  deleteEmployee(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("User deleted!!!")
      this.getAllEmployee()
    })

  }
  onEdit(row: any){
    this.employeeModelObj.id = row.id;
    this.formValue.controls['firstname'].setValue(row.firstname);
    this.formValue.controls['lastname'].setValue(row.lastname);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
    this.formValue.controls['designation'].setValue(row.designation);
  }
  updateEmployeeDetails(){
    
    this.employeeModelObj.firstname = this.formValue.value.firstname;
    this.employeeModelObj.lastname = this.formValue.value.lastname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.employeeModelObj.designation = this.formValue.value.designation;
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Successfully Updated")
      this.getAllEmployee()
      
    })
    this.formValue.reset();
  }

}
