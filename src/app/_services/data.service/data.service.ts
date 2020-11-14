import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';

import { environment }              from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl + '/dummy';

  constructor(private http: HttpClient) { }

  testDummyEndpoint() {
    console.log("testDummyEndpoint...");

    this.http.get(this.apiUrl).subscribe((response) => {
      console.log("Response: ", response);
    });
  }
}
