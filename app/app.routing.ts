import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "./pages/login/login.module#LoginModule"},
    { path: "dashboard", loadChildren: "./pages/dashboard/dashboard.module#DashboardModule"},

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }