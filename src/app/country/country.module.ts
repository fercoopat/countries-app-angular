import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ViewCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ViewCountryComponent,
  ],
})
export class CountryModule {}
