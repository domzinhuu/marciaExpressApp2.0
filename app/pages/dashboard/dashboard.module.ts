import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '~/pages/dashboard/dashboard-routing.module';
import { CardDetailsComponent } from '~/pages/dashboard/card-details/card-details.component';

@NgModule({
  imports: [DashboardRoutingModule,NativeScriptCommonModule],
  exports: [],
  declarations: [DashboardComponent,CardDetailsComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule {}
