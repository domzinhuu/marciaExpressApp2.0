import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from '~/pages/login/login-routing.module';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
  imports: [LoginRoutingModule, TNSCheckBoxModule,NativeScriptCommonModule,NativeScriptRouterModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule {}
