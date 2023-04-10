import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechppllistComponent } from './techppllist/techppllist.component';
import { TechppldetailsComponent } from './techppldetails/techppldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TechppllistComponent,
    TechppldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
