import { Component }    from '@angular/core';

import { UtilsService } from '@app/_services/utils.service/utils.service';


@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  styleUrls: ['./cheat-sheet.component.less']
})
export class CheatSheetComponent {
    colors = [
      ['color-main-darker', 'color-main', 'color-main-lighter', 'color-main-lighter-2'],
      ['color-secondary-darker', 'color-secondary', 'color-secondary-lighter'],
      ['color-tertiary-darker', 'color-tertiary', 'color-tertiary-lighter'],
      ['color-text-main-darker', 'color-text-main', 'color-text-main-lighter'],
      ['color-text-secondary-darker', 'color-text-secondary', 'color-text-secondary-lighter'],
      ['color-text-grey-darker', 'color-text-grey', 'color-text-grey-lighter'],
      ['color-white-darker', 'color-white', 'color-white-lighter'],
      ['color-light-grey-darker', 'color-light-grey', 'color-light-grey-lighter'],
      ['color-dark-grey-darker', 'color-dark-grey', 'color-dark-grey-lighter'],
      ['color-black-darker', 'color-black', 'color-black-lighter'],
      ['color-page-main-darker', 'color-page-main', 'color-page-main-lighter'],
      ['color-admin-main-darker', 'color-admin-main', 'color-admin-main-lighter', 'color-admin-main-lighter-2', 'color-admin-main-lighter-3'],
      ['color-admin-text-main-darker', 'color-admin-text-main', 'color-admin-text-main-lighter']
    ];

    constructor(private utilsService: UtilsService) { }

    copyToClipboard(item) {
        this.utilsService.copyToClipboard(item);
    }
}
