import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CardDetailsComponent } from '~/pages/dashboard/card-details/card-details.component';
import { RegisterComponent } from '~/pages/dashboard/registers/register.component';
import { AboutComponent } from '~/pages/dashboard/about/about.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'details/:cardName/:cardId/:month/:year', component: CardDetailsComponent },
  { path: 'history', component: RegisterComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

export const routedComponents = [DashboardComponent, CardDetailsComponent, RegisterComponent,AboutComponent];
