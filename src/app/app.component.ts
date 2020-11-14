import { Component }   from '@angular/core';

import { environment } from '@environments/environment';
import { DataService } from '@app/_services/data.service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'ReteteRo-App';
    appName = environment.appName;

    constructor(private dataService: DataService) {}

    testDummyEndpoint() {
        this.dataService.testDummyEndpoint();
    }
}
