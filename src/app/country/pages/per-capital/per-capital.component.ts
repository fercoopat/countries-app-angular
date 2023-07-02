import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
})
export class PerCapitalComponent {
  constructor(private countryService: CountryService) {}

  resource: string = 'capital';
  params: string = 'name,flags,population,capital,cca2';

  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

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
    console.log(value);
  }
}
