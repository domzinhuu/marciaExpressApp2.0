import { Injectable } from '@angular/core';
import * as Toast from 'nativescript-toast';

@Injectable()
export class HelperService {
  constructor() {}

  public showToast(message: string, duration = 3000): void {
    console.log(duration);
    const toast = Toast.makeText(message);
    toast.setDuration(duration);
    toast.show();
  }
}
