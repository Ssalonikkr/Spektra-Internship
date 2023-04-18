import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Emp2Component } from './emp2/emp2.component';
import { Emp3Component } from './emp3/emp3.component';
import { Emp1Component } from './emp1/emp1.component';

@NgModule({
  declarations: [
    AppComponent,
    Emp2Component,
    Emp3Component,
    Emp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
