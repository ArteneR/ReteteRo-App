import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { RouterModule, Routes }        from '@angular/router';

import { TermsAndConditionsComponent } from '@app/main.module/terms-and-conditions.module/terms-and-conditions.component/terms-and-conditions.component';


const termsAndConditionsRoutes: Routes = [
  {
    path: '',
    component: TermsAndConditionsComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(termsAndConditionsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TermsAndConditionsRoutingModule { }
