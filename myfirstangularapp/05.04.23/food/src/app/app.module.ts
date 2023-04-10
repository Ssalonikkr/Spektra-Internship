import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NorthindianfoodComponent } from './northindianfood/northindianfood.component';
import { SouthindianfoodComponent } from './southindianfood/southindianfood.component';

@NgModule({
  declarations: [
    AppComponent,
    NorthindianfoodComponent,
    SouthindianfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
