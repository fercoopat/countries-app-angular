import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country, Translation } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
})
export class ViewCountryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  resource: string = 'alpha';
  params: string = 'name,flags,population,capital,ccn3,cca3,translations';

  countryId: string;
  country: Country;
  translations: Translation[] = [];

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.countryService.searchCountries(
            this.resource,
            params.id,
            this.params
          )
        ),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country;
        this.translations = Object.values(this.country.translations);
        console.log(this.country);
      });

    /* this.route.params.subscribe((params) => {
      const countryId: string = params['id'];
      console.log(countryId);

      this.countryService
        .searchCountry(this.resource, countryId)
        .subscribe((country) => console.log(country));
    }); */
  }
}
