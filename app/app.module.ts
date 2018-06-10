import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from '~/core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreInterceptor } from '~/core/core.interceptor';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, CoreModule],
  declarations: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true }],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
