import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerCapitalComponent } from './country/pages/per-capital/per-capital.component';
import { PerCountryComponent } from './country/pages/per-country/per-country.component';
import { PerRegionComponent } from './country/pages/per-region/per-region.component';
import { ViewCountryComponent } from './country/pages/view-country/view-country.component';

const routes: Routes = [
  { path: '', component: PerCountryComponent },
  { path: 'region', component: PerRegionComponent },
  { path: 'capital', component: PerCapitalComponent },
  { path: 'country/:id', component: ViewCountryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
