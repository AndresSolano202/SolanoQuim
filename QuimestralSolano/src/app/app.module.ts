import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
