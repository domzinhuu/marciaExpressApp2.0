import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '~/core/services/data.service';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from '~/core/services/helper.service';

@NgModule({
    imports: [HttpClientModule,NativeScriptCommonModule],
    providers: [DataService,HelperService],
    schemas:[NO_ERRORS_SCHEMA]
})
export class CoreModule { }
