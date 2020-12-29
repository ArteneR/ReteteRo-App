import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { PrivacyPolicyComponent }     from '@app/main.module/privacy-policy.module/privacy-policy.component/privacy-policy.component';
import { PrivacyPolicyRoutingModule } from '@app/main.module/privacy-policy.module/privacy-policy-routing.module';


@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule
  ]
})
export class PrivacyPolicyModule { }
