import { BrowserModule }                 from '@angular/platform-browser';
import { ReactiveFormsModule }           from '@angular/forms';
import { HttpClientModule }              from '@angular/common/http';
import { NgModule }                      from '@angular/core';
import { BrowserAnimationsModule }       from '@angular/platform-browser/animations';

import { AngularSvgIconModule }          from 'angular-svg-icon';
import { CoreModule }                    from '@app/_core/core.module';
import { AngularMaterialModule }         from '@app/_core/angular-material.module.ts';
import { DataService }                   from '@app/_services/data.service/data.service';
import { CheatSheetComponent }           from '@app/_cheat-sheet.component/cheat-sheet.component';
import { ColorsComponent }               from '@app/_cheat-sheet.component/colors.component/colors.component';
import { AngularMaterialThemeComponent } from '@app/_cheat-sheet.component/angular-material-theme.component/angular-material-theme.component';
import { AppRoutingModule }              from '@app/app-routing.module';
import { AppComponent }                  from '@app/app.component';
import { PageNotFoundComponent }         from '@app/page-not-found.component/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CheatSheetComponent,
    ColorsComponent,
    AngularMaterialThemeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
