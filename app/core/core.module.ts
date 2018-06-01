import { NgModule } from '@angular/core';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { DataService } from '~/core/services/data.service';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
@NgModule({
    imports: [NativeScriptHttpClientModule,NativeScriptCommonModule],
    exports: [],
    providers: [DataService],
})
export class CoreModule { }
