import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';

export const ROUTES : Routes=[
	{path:'',component:R1Component},
	{path:'r2',component:R2Component},
  {path:'r2/:r3',component:R3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    R1Component,
    R2Component,
    R3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
