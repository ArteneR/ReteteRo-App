import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { MainComponent }      from '@app/main.module/main.component/main.component';
import { MainRoutingModule }  from '@app/main.module/main-routing.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [
    MainComponent
  ]
})
export class MainModule { }
