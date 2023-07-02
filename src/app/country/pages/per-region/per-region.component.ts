import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PerRegionComponent {
  constructor(private countryService: CountryService) {}

  resource: string = 'region';
  params: string = 'name,flags,population,capital,cca2';

  regions: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  getClass(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  onActivateRegion(region: string) {
    if (region === this.activeRegion) return;

    this.activeRegion = region;
    this.countries = [];

    this.countryService
      .searchCountries(this.resource, region, this.params)
      .subscribe((countries) => (this.countries = countries));
  }
}
