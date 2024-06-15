import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArgentinaCovidDataService {

  private apiUrl = 'https://disease.sh/v3/covid-19/countries/Argentina';

  constructor(private http: HttpClient) { }

  getArgentinaCovidData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
