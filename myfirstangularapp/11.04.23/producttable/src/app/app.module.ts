import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtableComponent } from './protable/protable.component';
import { PdisplayComponent } from './pdisplay/pdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtableComponent,
    PdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
