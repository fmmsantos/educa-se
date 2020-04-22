import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/primeng';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class BSMessage {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

    sucesso(mensagem: String) {
        this.messageService.add({severity: 'success', summary: 'Sucesso' , detail: `${mensagem}`});
    }

    informa(mensagem: String) {
      this.messageService.add({severity: 'info', summary: 'Informa', detail: `${mensagem}`});
    }

    avisa(mensagem: String) {
      this.messageService.add({severity: 'warn', summary: 'Aviso', detail: `${mensagem}`});
    }

    error(mensagem: String) {
      this.messageService.add({severity: 'error', summary: 'Erro', detail: `${mensagem}`});
    }

    confirmar(mensagem: String, callbackAccetp ) {
      this.confirmationService.confirm({
          message: `${mensagem}`,
          header: 'Confirmação',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            callbackAccetp();
          },
          reject: () => {
            console.log(mensagem + ' - NAO');
          }
      });
  }

  errorOnRequest(error: HttpErrorResponse){
    var statusCode = error['status']
    if (statusCode == 403 ){
      this.error('Falha na autenticação do usuário, Login ou Senha inválido');
    }
    else
    {
      if (statusCode === 504){
        this.informa('Aplicação indisponivel no momento, por favor tente mais tarde!');
      }else if (statusCode === 401) {
        this.error('Usuário não autorizado');
      }else{
        console.log(error)
        this.informa('Ops, tivemos um problema ao tratar sua requisição' + error);
      }
    }
  }
}
