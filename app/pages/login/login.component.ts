import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { DataService } from '~/core/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/directives/dialogs';
import { RequestAccessModalComponent } from '~/pages/login/request-access.modal/request-access-modal.component';
import { HelperService } from '~/core/services/helper.service';

@Component({
  moduleId: module.id,
  selector: 'mex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isBusy: boolean = false;
  rememberMe: boolean = false;
  username: string;
  password: string;
  formErrors: string[] = [];
  submited: boolean = false;
  activeEasterEgg: number;

  constructor(
    private page: Page,
    private dataService: DataService,
    private helpService: HelperService,
    private routerExtensions: RouterExtensions,
    private modalService: ModalDialogService,
    private vcref: ViewContainerRef
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    const credentials = this.dataService.getSession();
    this.rememberMe = credentials.rememberMe;
    this.username = credentials.username;
    this.password = credentials.password;
    this.activeEasterEgg = 10;
  }

  login(): void {
    this.submited = true;
    this.isBusy = true;

    if (this.username && this.password) {
      this.dataService.authenticate(this.username, this.password).subscribe(
        (res: any) => {
          const credentials = res.data;
          credentials['username'] = this.username;
          credentials['password'] = this.password;
          this.dataService.saveSession(credentials, this.rememberMe);
          this.routerExtensions.navigate(['dashboard'], { clearHistory: true });
          this.isBusy = false;
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.formErrors.push('Usuário ou senha inválido....');
            }
          }
          this.isBusy = false;
        }
      );
    }
  }

  toggleRememberMe(check): void {
    this.rememberMe = check.checked;
  }

  requestAccess(): void {
    const options: ModalDialogOptions = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcref
    };
    this.modalService.showModal(RequestAccessModalComponent, options).then((res: any) => {
      if (res) {
        this.isBusy = true;
        const phoneNumber = res.phone;
        const username = res.username;
        const msgText = `Olá adminstrador do Marcia Express, ${username} gostaria de obter acesso ao aplicativo. Envie a senha para o numero ${phoneNumber}`;
        this.dataService.sendNotify(null, msgText).subscribe(
          res => {
            this.isBusy = false;
            this.helpService.showToast(res.messages[0]);
          },
          err => {
            this.isBusy = false;
          }
        );
      }
    });
  }

  easterEgg(): void {
    if (this.activeEasterEgg > 0) {
      this.activeEasterEgg = this.activeEasterEgg - 1;

      if (this.activeEasterEgg == 0) {
        this.activeEasterEgg = 10;
        this.routerExtensions.navigate(['login/easteregg']);
      }
    }
  }
}
