import { Component }    from '@angular/core';

import { UtilsService } from '@app/_services/utils.service/utils.service';


@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  styleUrls: ['./cheat-sheet.component.less']
})
export class CheatSheetComponent {
    constructor(private utilsService: UtilsService) { }

    copyToClipboard(item) {
        this.utilsService.copyToClipboard(item);
    }
}
