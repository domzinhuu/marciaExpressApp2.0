import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { getString } from 'application-settings';
import { USER_ID, API_ENDPOINT } from '~/core/core.variables.utils';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public getFatura(month, year, cardId): Observable<any> {
    const userId = getString(USER_ID);

    let params = new HttpParams();
    params = params.append('month', month);
    params = params.append('year', year);
    params = params.append('card', cardId);
    params = params.append('user', userId);

    return this.httpClient.get(`${API_ENDPOINT}/registers`, { params });
  }
}
