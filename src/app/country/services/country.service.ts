import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  searchCountries(
    term: string,
    search: string,
    params?: string
  ): Observable<Country[]> {
    let url = `${BASE_URL}/${term}/${search}`;

    if (params) {
      url = `${BASE_URL}/${term}/${search}?fields=${params}`;
    }

    return this.http.get<Country[]>(url);
  }
}
