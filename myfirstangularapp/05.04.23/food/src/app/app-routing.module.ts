import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorthindianfoodComponent } from './northindianfood/northindianfood.component';
import { SouthindianfoodComponent } from './southindianfood/southindianfood.component';
const routes: Routes = [
{
  path: 'north',component:NorthindianfoodComponent
},
{
  path: 'south',component:SouthindianfoodComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
