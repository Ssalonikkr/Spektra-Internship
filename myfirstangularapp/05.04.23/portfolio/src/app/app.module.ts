import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoniComponent } from './soni/soni.component';
import { JyotiComponent } from './jyoti/jyoti.component';
import { ShobhaComponent } from './shobha/shobha.component';
import { WcComponent } from './wc/wc.component';

@NgModule({
  declarations: [
    AppComponent,
    SoniComponent,
    JyotiComponent,
    ShobhaComponent,
    WcComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
