import { Component }   from '@angular/core';

import { environment } from '@environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', './app.component.tablet.less', './app.component.mobile.less']
})
export class AppComponent {
    title = 'ReteteRo-App';
    appName = environment.appName;

    constructor() {}
}
