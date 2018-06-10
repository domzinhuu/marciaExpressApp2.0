import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { EasterEggComponent } from '~/pages/login/easter-egg/easter-egg.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'easteregg', component: EasterEggComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }

export const routedComponents = [LoginComponent];