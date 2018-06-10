import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { getString } from 'tns-core-modules/application-settings/application-settings';
import { API_TOKEN } from '~/core/core.variables.utils';
import { RouterExtensions } from 'nativescript-angular/router';
import { HelperService } from '~/core/services/helper.service';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  errorMessager: string;
  constructor(private routerExtensions: RouterExtensions, private helpService: HelperService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = getString(API_TOKEN);

    if (token || this.safeRoute(req)) {
      let headers;
      if (token) {
        headers = req.headers.set('Authorization', token);
      }
      const authReq = req.clone({ headers });
      return next.handle(authReq).do(
        (next: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 403) {
              this.errorMessager = err.error.messages[0];
              this.helpService.showToast(this.errorMessager);
              this.routerExtensions.navigate(['login']);
            }

            if(err.status === 404){
              this.helpService.showToast('Serviço não encontrado, entre em contato com o adminstrador.');
              this.routerExtensions.navigate(['login']);
            }
          }
        }
      );
    }

    this.helpService.showToast('É necessario logar-se para acessar o conteudo');
    this.routerExtensions.navigate(['login']);
  }

  private safeRoute(req: HttpRequest<any>): boolean {
    let safe: boolean = false;
    const routes = ['.+/api/users/login', '.+/api/registers/save/notify'];

    routes.forEach(route => {
      if (req.url.match(route)) {
        safe = true;
      }
    });

    return safe;
  }
}
