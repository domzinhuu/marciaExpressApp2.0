import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from '~/pages/login/login-routing.module';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SharedModule } from '~/shared/shared.module';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { RequestAccessModalComponent } from '~/pages/login/request-access.modal/request-access-modal.component';

@NgModule({
  imports: [LoginRoutingModule, TNSCheckBoxModule,NativeScriptCommonModule,NativeScriptRouterModule,SharedModule,NativeScriptFormsModule],
  exports: [],
  declarations: [LoginComponent,RequestAccessModalComponent],
  entryComponents:[RequestAccessModalComponent],
  providers: [ModalDialogService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule {}
