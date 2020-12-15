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
}
