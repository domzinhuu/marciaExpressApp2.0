import { Component, OnInit, Input } from '@angular/core';
import { isAndroid } from 'tns-core-modules/ui/page/page';

@Component({
    moduleId:module.id,
    selector: 'mex-loading',
    templateUrl: './loading.component.html',
    styleUrls:['./loading.component.css']
})

export class LoadingComponent implements OnInit {
    @Input() busy:boolean = false;
    isAndroid:boolean;

    constructor() { 
        this.isAndroid = isAndroid
    }

    ngOnInit() { }
}