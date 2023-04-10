import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pro1Component } from './pro1/pro1.component';


const routes: Routes = [
  {
    path:'pro1', component:Pro1Component
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
