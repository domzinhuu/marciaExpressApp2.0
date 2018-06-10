import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { HelperService } from '~/core/services/helper.service';

@Component({
  moduleId: module.id,
  selector: 'mex-req-access',
  templateUrl: './request-access-modal.component.html',
  styleUrls: ['request-access-modal.component.css']
})
export class RequestAccessModalComponent implements OnInit {
  username: string;
  phoneNumber: string;

  constructor(private params: ModalDialogParams, private helpService: HelperService) {}

  ngOnInit() {}

  closeModal(): void {
    if (this.username && this.phoneNumber) {
      this.params.closeCallback({ username: this.username, phone: this.phoneNumber });
      return;
    }else{
      this.helpService.showToast('É preciso informar o nome completo e um número de telefone celular');
    }

    
  }

  cancelRequet():void{
    this.params.closeCallback(null);
  }
}
