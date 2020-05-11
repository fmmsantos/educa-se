import { AcessoResource } from './../../model/app-model.services';

import { Component, OnInit } from '@angular/core';
import { BSAuth } from '../../base/services/BSAuth.service';
import { BSMessage } from '../../base/services/BSMessage.service';
import { Usuarioo } from './usuarioo';

@Component({
    templateUrl: './login.html'
})
export class Login implements OnInit {
    private usuario:Usuarioo = new Usuarioo()


    liberarLogin:Boolean = false;

    constructor(
        private bsAuth: BSAuth,
        private bsMessage: BSMessage,
       // recaptch = (window as any).grecaptcha
    ) {

    }
  //  private usuario :Usuario;

    ngOnInit() {


    }
    logiin() {

        console.log('Login Request', this.usuario);

        this.bsAuth.fazerLogin(this.usuario)
            .then(data => {
                console.log('Login Response OK:', data)
            })
            .catch(error => {
                this.bsMessage.avisa('Problema ao fazer login: ' + error.message)
            });
        }
    }

/*  login(){
        this.liberarLogin = true
        if (this.liberarLogin === false){
            this.bsMessage.avisa("Operação não habilitada")
            return
        }
        if (this.usuario.registro['email'] == null){
            this.bsMessage.error("Usuário deve ser informado")
            return
        }

        if (this.usuario.registro['senha'] == null){
            this.bsMessage.error("Informe Senha")
            return
        }
        */
     // this.bsAuth.autenticar(this.usuario.registro['email'], this.usuario.registro['senha']);


  /*  onKey(event: any){
       if (event['key'] == 'Enter' && this.usuario.registro['email'] != null ){
        this.login()
       }
    }

    showResponse(response) {
        this.liberarLogin = response != null
    }

}
*/

