import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'mex-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {}

  public ngOnInit() {}

  public back() {
    this.routerExtensions.back();
  }
}
