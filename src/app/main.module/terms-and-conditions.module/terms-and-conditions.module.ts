import { NgModule }                        from '@angular/core';
import { CommonModule }                    from '@angular/common';

import { TermsAndConditionsComponent }     from '@app/main.module/terms-and-conditions.module/terms-and-conditions.component/terms-and-conditions.component';
import { TermsAndConditionsRoutingModule } from '@app/main.module/terms-and-conditions.module/terms-and-conditions-routing.module';


@NgModule({
  declarations: [
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsAndConditionsRoutingModule
  ]
})
export class TermsAndConditionsModule { }
