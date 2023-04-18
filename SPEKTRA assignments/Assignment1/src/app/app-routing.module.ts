import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { Emp3Component } from './emp3/emp3.component';

const routes: Routes = [
  {
    path:'emp1',component:Emp1Component
  },
  {
    path:'emp2',component:Emp2Component
  },
  {
    path:'emp3',component:Emp3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
