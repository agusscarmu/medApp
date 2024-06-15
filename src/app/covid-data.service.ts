// src/app/covid-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  private apiUrl = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

  constructor(private http: HttpClient) { }

  getCovidData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
