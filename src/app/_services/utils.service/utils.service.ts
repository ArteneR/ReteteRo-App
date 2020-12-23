import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
    constructor() { }

    public generateCopyrightText(): string {
        let copyrightStartYear = 2020;
        let copyrightEndYear = (new Date()).getFullYear(); 
        return 'Copyright &copy; ' + copyrightStartYear + ( (copyrightEndYear !== copyrightStartYear) ? ' - ' + copyrightEndYear : '') + ' ArteneR';
    }


    public copyToClipboard(item) {
        document.addEventListener('copy', (e: ClipboardEvent) => {
          e.clipboardData.setData('text/plain', (item));
          e.preventDefault();
          document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
}
