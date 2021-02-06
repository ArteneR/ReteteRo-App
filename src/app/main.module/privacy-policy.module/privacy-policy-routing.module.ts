import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { PrivacyPolicyComponent } from '@app/main.module/privacy-policy.module/privacy-policy.component/privacy-policy.component';


const privacyPolicyRoutes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(privacyPolicyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivacyPolicyRoutingModule { }
