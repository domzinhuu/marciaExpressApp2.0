import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { getString, setString, clear, setBoolean, getBoolean, remove } from 'application-settings';
import { USER_ID, API_ENDPOINT, API_TOKEN, USERNAME, PASSWORD, COMPLETE_NAME, REMEMBERME } from '~/core/core.variables.utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RegisterContainer } from '~/pages/dashboard/registers/register.models';
import { RouterExtensions } from 'nativescript-angular/router';
import { device } from 'platform';
import { CardsContainer } from '~/core/models/card.model';

import * as phone from 'nativescript-phone';
import { Notify } from '~/core/models/notify.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient, private routerExtensions: RouterExtensions) {}

  public authenticate(username: string, password: string): Observable<any> {
    const url = `${API_ENDPOINT}/users/login`;
    return this.httpClient.post<any>(url, { username, password, type: device.os });
  }

  public saveSession(credentials: any, rememberMe = false): void {
    setString(API_TOKEN, `Bearer ${credentials.accessToken}`);
    setString(USER_ID, credentials.id);
    setString(COMPLETE_NAME, credentials.completeName);

    if (rememberMe) {
      setString(USERNAME, credentials.username);
      setString(PASSWORD, credentials.password);
      setBoolean(REMEMBERME, rememberMe);
    } else {
      this.cleanUserDataInSession();
    }
  }

  public getDashboardData(): Observable<CardsContainer> {
    const userId = getString(USER_ID);
    const url = `${API_ENDPOINT}/registers/user/${userId}`;

    return this.httpClient.get<CardsContainer>(url).map((response: any) => {
      return response.data;
    });
  }

  public getFatura(month, year, cardId): Observable<any> {
    const userId = getString(USER_ID);

    let params = new HttpParams();
    params = params.append('month', month);
    params = params.append('year', year);
    params = params.append('card', cardId);
    params = params.append('user', userId);

    return this.httpClient.get(`${API_ENDPOINT}/registers`, { params });
  }

  public getUserRegisterHistory(): Observable<RegisterContainer[]> {
    const userId = getString(USER_ID);
    return this.httpClient.get<RegisterContainer[]>(`${API_ENDPOINT}/registers/user/${userId}/history`);
  }

  public getSession(): any {
    const rememberMe = getBoolean(REMEMBERME);
    if (rememberMe) {
      return {
        rememberMe,
        username: getString(USERNAME),
        password: getString(PASSWORD)
      };
    }
    return {
      rememberMe: false
    };
  }

  public sendNotify(userId = null,message: string,description = ''): Observable<any> {
    const url = `${API_ENDPOINT}/registers/save/notify`;
    const notify = new Notify(userId,message,description);
    return this.httpClient.post<any>(url,notify);
  }

  public logout(): void {
    remove(API_TOKEN);
    this.routerExtensions.navigate(['login'], { clearHistory: true });
  }

  private cleanUserDataInSession(): void {
    remove(USERNAME);
    remove(PASSWORD);
    setBoolean(REMEMBERME, false);
  }
}
