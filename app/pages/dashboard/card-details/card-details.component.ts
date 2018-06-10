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
  isBusy: boolean = false;

  constructor(private activedRoute: ActivatedRoute, private routerExtensions: RouterExtensions, private dataService: DataService) {}

  ngOnInit() {
    this.isBusy = true;
    this.activedRoute.params.subscribe(params => {
      this.cardName = params['cardName'];
      this.cardId = params['cardId'];
      this.month = params['month'];
      this.year = parseInt(params['year']);

      this.dataService.getFatura(this.month, this.year, this.cardId).subscribe((result: any[]) => {
        this.fatura = result.map(item => new FaturaItem(item, this.month, this.year));
        this.cardTotalValue = _.sumBy(this.fatura, 'value');
        this.isBusy = false;
      });
    });
  }

  public back(): void {
    this.routerExtensions.back();
  }
}
