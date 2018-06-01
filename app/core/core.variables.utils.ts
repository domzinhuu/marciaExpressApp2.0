import { prompt, PromptResult, inputType } from 'ui/dialogs';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

export const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
export const USER_ID = 'userId';
export const API_ENDPOINT = 'http://localhost:3005/api';

/* Funções utils */

export const showPromptDialog = (title,message,okBtn='Ok',cancelBtn='Cancelar'): Observable<any> => {
  let options = {
    title: title,
    message:message,
    inputType: inputType.text,
    okButtonText: okBtn,
    cancelButtonText: cancelBtn
  };

  return fromPromise(prompt(options));
};
