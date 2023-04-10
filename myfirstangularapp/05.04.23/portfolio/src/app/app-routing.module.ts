import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoniComponent } from './soni/soni.component';
import { JyotiComponent } from './jyoti/jyoti.component';
import { ShobhaComponent } from './shobha/shobha.component';


const routes: Routes = [
  
  
    {
      path:'soni',component:SoniComponent
    },
    {
      path:'jyoti',component:JyotiComponent
    },
    {
      path:'shobha',component:ShobhaComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
