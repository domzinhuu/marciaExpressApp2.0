import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoadingComponent } from '~/shared/loading/loading.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
    imports: [NativeScriptCommonModule],
    exports: [LoadingComponent],
    declarations: [LoadingComponent],
    providers: [],
    schemas:[NO_ERRORS_SCHEMA]
})
export class SharedModule { }
