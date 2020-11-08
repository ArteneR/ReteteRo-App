import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';

import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { DataService }            from './services/data.service/data.service';
import { PageNotFoundComponent }  from './page-not-found.component/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
