import { NgModule }                 from '@angular/core';

import { AngularSvgIconModule }     from 'angular-svg-icon';
import { SocialMediaShareComponent} from '@app/_components/social-media-share.component/social-media-share.component';


@NgModule({
    declarations: [
        SocialMediaShareComponent,
    ],
    imports: [
        AngularSvgIconModule
    ],
    exports: [
        SocialMediaShareComponent,
    ]
})
export class SocialMediaShareModule { }