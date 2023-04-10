import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Ppllist } from 
const routes: Routes = [
  
    {
      path: 'ppl',component:Ppllist
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
