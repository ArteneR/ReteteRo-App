import { NgModule }               from '@angular/core';

import { ImageFallbackDirective } from '@app/_directives/image-fallback.directive/image-fallback.directive';


@NgModule({
    declarations: [
        ImageFallbackDirective,
    ],
    exports: [
        ImageFallbackDirective,
    ]
})
export class ImageFallbackModule { }