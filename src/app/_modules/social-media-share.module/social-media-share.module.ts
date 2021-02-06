import { NgModule }                 from '@angular/core';

import { SocialMediaShareComponent} from '@app/_components/social-media-share.component/social-media-share.component';


@NgModule({
    declarations: [
        SocialMediaShareComponent,
    ],
    exports: [
        SocialMediaShareComponent,
    ]
})
export class SocialMediaShareModule { }