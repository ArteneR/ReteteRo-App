import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule }         from '@angular/router';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { BreadcrumbsComponent}  from '@app/_components/breadcrumbs.component/breadcrumbs.component';


@NgModule({
    declarations: [
        BreadcrumbsComponent,
    ],
    exports: [
        BreadcrumbsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularSvgIconModule
    ]
})
export class BreadcrumbsModule { }