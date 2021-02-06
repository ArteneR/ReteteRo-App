import { NgModule }             from '@angular/core';

import { SectionTitleComponent} from '@app/_components/section-title.component/section-title.component';


@NgModule({
    declarations: [
        SectionTitleComponent,
    ],
    exports: [
        SectionTitleComponent,
    ]
})
export class SectionTitleModule { }