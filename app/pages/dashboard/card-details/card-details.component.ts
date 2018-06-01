import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { FaturaItem } from '~/core/models/fatura.model';
import { DataService } from '~/core/services/data.service';
import { MONTHS } from '~/core/core.variables.utils';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'mex-card-detail',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  cardName: string;
  cardId: string;
  month: string;
  year: number;
  fatura: FaturaItem[] = [];
  cardTotalValue: number = 0;

  constructor(private activedRoute: ActivatedRoute, private routerExtensions: RouterExtensions, private dataService: DataService) {}

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      this.cardName = params['cardName'];
      this.cardId = params['cardId'];

      this.month = MONTHS[new Date().getMonth()];
      this.year = new Date().getFullYear();

      /*  this.dataService.getFatura(this.month, this.year, this.cardId).subscribe((result: any[]) => {
        this.fatura = result.map(item => new FaturaItem(item, this.month, this.year));
        this.cardTotalValue = _.sumBy(this.fatura,'value');
      }); */

      for (let index = 0; index < 10; index++) {
        const dat = {
          productName:'Martelo',
          local:'Leroy Merlin',
          installmentNumber:8,
          installments: [
            { paymentMonth: 'Maio', paymentYear: 2018, id: '4jh34hj345hkj', number: 4, value: 11000 },
          ]
        };
        this.fatura.push(new FaturaItem(dat,this.month,this.year));
      }

      this.cardTotalValue = _.sumBy(this.fatura,'value');
    });
  }

  public back(): void {
    this.routerExtensions.back();
  }
}
