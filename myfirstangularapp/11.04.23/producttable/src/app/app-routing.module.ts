import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdisplayComponent } from './pdisplay/pdisplay.component';
import { ProtableComponent } from './protable/protable.component';

const routes: Routes = [
  {path:'',component:ProtableComponent},
  {path:'pdisplay',component:PdisplayComponent},
  {path:'protable',component:ProtableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
