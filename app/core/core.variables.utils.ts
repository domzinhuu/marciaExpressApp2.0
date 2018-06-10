import { prompt, PromptResult, inputType } from 'ui/dialogs';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

export const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
export const USER_ID = 'userId';
export const COMPLETE_NAME = 'completeUserName';
export const API_ENDPOINT = 'http://192.168.1.3:3005/api';
// export const API_ENDPOINT = 'https://marciaexpress.tk/api';
export const API_TOKEN = 'api_token';
export const USERNAME = 'username';
export const PASSWORD = 'password';
export const REMEMBERME = 'rememberMe';

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
