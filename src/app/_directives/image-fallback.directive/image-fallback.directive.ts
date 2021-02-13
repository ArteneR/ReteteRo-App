import { Directive, Input, HostBinding } from '@angular/core';


@Directive({
  selector: 'img[default]',
    host: {
      '(error)': 'updateUrl()',
      '(load)':  'load()',
      '[src]':   'src'
     }
})
export class ImageFallbackDirective {
    @Input() src: string;
    @Input() default: string;
    @HostBinding('class') className;


    updateUrl() {
        this.src = ((this.default == 'avatar') ? 
                    'assets/images/placeholders/user-image-placeholder.jpg' : 
                    'assets/images/placeholders/image-placeholder.png');
    }


    load() {
        this.className = 'image-loaded';
    }
}
