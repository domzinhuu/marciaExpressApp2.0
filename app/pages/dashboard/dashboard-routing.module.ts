import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CardDetailsComponent } from '~/pages/dashboard/card-details/card-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'details/:cardName/:cardId', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardComponent,CardDetailsComponent];