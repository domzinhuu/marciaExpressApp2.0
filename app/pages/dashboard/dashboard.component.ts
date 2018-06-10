import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { showPromptDialog, COMPLETE_NAME, MONTHS, USER_ID } from '~/core/core.variables.utils';
import { PromptResult, alert } from 'ui/dialogs';
import { getString } from 'tns-core-modules/application-settings/application-settings';
import { CardsContainer } from '~/core/models/card.model';
import { DataService } from '~/core/services/data.service';
import { HelperService } from '~/core/services/helper.service';

@Component({
  moduleId: module.id,
  selector: 'mex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isBusy: boolean = false;
  usernameLogged: string;
  cardContainer: CardsContainer;
  paymentMonth: string = '';
  payDay: Date;
  userId: string;

  constructor(private routerExtensions: RouterExtensions, private dataService: DataService, private helpService: HelperService) {
    this.cardContainer = new CardsContainer();
  }

  ngOnInit() {
    this.isBusy = true;
    this.usernameLogged = getString(COMPLETE_NAME);
    this.userId = getString(USER_ID);

    this.dataService.getDashboardData().subscribe((container: any) => {
      this.cardContainer = container;
      this.payDay = new Date(this.cardContainer.cardList[0].paymentDate);
      this.paymentMonth = MONTHS[this.payDay.getMonth()];
      this.isBusy = false;
    });
  }

  public back(): void {
    this.routerExtensions.back();
  }

  public goToDetails(cardName, cardId): void {
    this.routerExtensions.navigate([`dashboard/details/${cardName}/${cardId}/${MONTHS[this.payDay.getMonth()]}/${this.payDay.getFullYear()}`]);
  }

  public sendNotification(): void {
    showPromptDialog(
      'Notificação',
      'Informe o que foi comprado,onde foi comprado, o cartão usado, o valor total e a quantidade de parcelas'
    ).subscribe((res: PromptResult) => {
      if (res.result) {
        this.isBusy = true;
        const msgNotifiy = `O usuário ${this.usernameLogged}, enviou uma notificação.`;
        const descNotify = res.text;
        this.dataService.sendNotify(this.userId, msgNotifiy, descNotify).subscribe((res: any) => {
          this.isBusy = false;
          this.helpService.showToast('Obrigado por colaborar, isso é muito importante!');
        });
      }
    });
  }

  public logout(): void {
    this.dataService.logout();
  }
}
