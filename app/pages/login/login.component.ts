import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  moduleId: module.id,
  selector: 'mex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private page: Page) {
    page.actionBarHidden = true;
  }

  ngOnInit() {}
}
