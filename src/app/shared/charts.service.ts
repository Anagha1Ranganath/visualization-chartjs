import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ChartsService {

  constructor(
    private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }

  getJSON(date,slot): Observable<any> {

    return this.http.get('http://localhost:3001/route' + "?" + "date=" + date + "&" + "slotType=" + slot);
  }
}
