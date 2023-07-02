import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PerCountryComponent {
  constructor(private countryService: CountryService) {}

  resource: string = 'name';
  params: string = 'name,flags,population,capital,cca2';

  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestCountries: Country[] = [];

  onSearch(event: string) {
    this.hasError = false;

    this.searchTerm = event;

    this.countryService
      .searchCountries(this.resource, this.searchTerm, this.params)
      .subscribe(
        (countries) => {
          this.countries = countries;
        },
        (err) => {
          this.hasError = true;
          this.countries = [];
        }
      );
  }

  onSuggest(value: string) {
    this.hasError = false;
    this.searchTerm = value;

    this.countryService
      .searchCountries(this.resource, value, this.params)
      .subscribe(
        (countries) => (this.suggestCountries = countries.splice(0, 4)),
        (err) => (this.suggestCountries = [])
      );
  }
}
