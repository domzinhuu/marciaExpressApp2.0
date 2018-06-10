import { Injectable } from '@angular/core';
import * as Toast from 'nativescript-toast';

@Injectable()
export class HelperService {

    constructor() { }


    public showToast(message:string,duration = 3000):void{
        Toast.makeText(message,duration.toString()).show();
    }
}