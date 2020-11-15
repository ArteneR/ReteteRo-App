import { BrowserModule }          from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }       from '@angular/common/http';
import { NgModule }               from '@angular/core';

import { CoreModule }             from '@app/_core/core.module';
import { DataService }            from '@app/_services/data.service/data.service';
import { AppRoutingModule }       from '@app/app-routing.module';
import { AppComponent }           from '@app/app.component';
import { PageNotFoundComponent }  from '@app/page-not-found.component/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
