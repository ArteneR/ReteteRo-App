import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';

import { AngularSvgIconModule }  from 'angular-svg-icon';
import { AngularMaterialModule } from '@app/_core/angular-material.module.ts';
import { BreadcrumbsModule }     from '@app/_modules/breadcrumbs.module/breadcrumbs.module';
import { MainComponent }         from '@app/main.module/main.component/main.component';
import { MainNavComponent }      from '@app/main.module/main.component/main-nav.component/main-nav.component';
import { MainRoutingModule }     from '@app/main.module/main-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    AngularMaterialModule,
    BreadcrumbsModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [
    MainComponent
  ]
})
export class MainModule { }
