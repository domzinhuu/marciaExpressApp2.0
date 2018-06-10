import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '~/pages/dashboard/dashboard-routing.module';
import { CardDetailsComponent } from '~/pages/dashboard/card-details/card-details.component';
import { RegisterComponent } from '~/pages/dashboard/registers/register.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AboutComponent } from '~/pages/dashboard/about/about.component';
import { SharedModule } from '~/shared/shared.module';


@NgModule({
  imports: [DashboardRoutingModule,NativeScriptCommonModule,NativeScriptRouterModule,SharedModule],
  exports: [],
  declarations: [DashboardComponent,CardDetailsComponent,RegisterComponent,AboutComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule {}
