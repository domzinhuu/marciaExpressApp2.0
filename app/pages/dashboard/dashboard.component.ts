import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { showPromptDialog } from '~/core/core.variables.utils';
import {PromptResult} from 'ui/dialogs';

@Component({
  moduleId: module.id,
  selector: 'mex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faturaList: any[] = [];
  constructor(private routerExtensions: RouterExtensions) {
    for (let i = 0; i < 5; i++) {
      this.faturaList.push({ id: '298839438cj829038c4', name: 'Meu Cartão', description: 'Pagamento dia 5', value: 243.0 });
    }
  }

  ngOnInit() {}

  public back(): void {
    this.routerExtensions.back();
  }

  public goToDetails(cardName, cardId): void {
    this.routerExtensions.navigate([`dashboard/details/${cardName}/${cardId}`]);
  }

  public sendNotification(): void {
    showPromptDialog(
      'Notificação',
      'Informe o que foi comprado,onde foi comprado, o cartão usado, o valor total e a quantidade de parcelas'
    ).subscribe((res:PromptResult) => {
      if(res.result){
        // joga pro servidor
      }
    });
  }
}
