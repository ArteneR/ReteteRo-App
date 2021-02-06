import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';

import { BreadcrumbsComponent} from '@app/_components/breadcrumbs.component/breadcrumbs.component';


@NgModule({
    declarations: [
        BreadcrumbsComponent,
    ],
    exports: [
        BreadcrumbsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class BreadcrumbsModule { }