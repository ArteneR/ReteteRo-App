import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FieldsService {
    private fieldsOptions = {
        'difficulty': {
            'easy':   'Usor',
            'medium': 'Mediu',
            'hard':   'Greu'
        }
    };


    public getFieldOptions(field) {
        return this.fieldsOptions[field] ? this.fieldsOptions[field] : {};
    }
}
