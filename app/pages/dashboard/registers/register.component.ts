import { Component, OnInit } from '@angular/core';
import { RegisterContainer } from '~/pages/dashboard/registers/register.models';
import { DataService } from '~/core/services/data.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId:module.id,
  selector: 'mex-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isBusy:boolean = false;
  registerContainerList: RegisterContainer[] = [];
  actualYear:number = new Date().getFullYear();
  constructor(private dataService: DataService, private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.isBusy = true;
    this.dataService.getUserRegisterHistory().subscribe((res: RegisterContainer[]) => {
      this.registerContainerList = res;
      this.isBusy = false;
    });
  }

  public back(): void {
    this.routerExtensions.back();
  }
}
