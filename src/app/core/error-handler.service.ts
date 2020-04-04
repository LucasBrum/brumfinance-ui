import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) {}

  handle(errorResponse: any) {
    let mensagem: string;

    if(typeof errorResponse === 'string') {
      mensagem = errorResponse;
    } else {
      mensagem = 'Erro ao processar recurso remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }

    this.toasty.error(mensagem);
  }
}
