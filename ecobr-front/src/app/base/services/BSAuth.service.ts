//import { AppMenuComponent } from './../../app.menu.component';
import { Usuarioo } from './../../cadastro/login/usuarioo';
import { UsuarioResource, AcessoResource } from 'src/app/model/app-model.services';
//import { Login } from './../../cadastro/login/login';
//import { UsuarioResource } from './../../model/app-model.services';
//import { Usuario } from './../../cadastro/usuario/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { BSResponse } from '../domain/BSResponse';
import { environment } from '../../../environments/environment.prod';
import { BSMessage } from './BSMessage.service';
import { Router } from '@angular/router';
//import { Usuarioo } from 'src/app/cadastro/login/usuarioo';

@Injectable()
export class BSAuth {
    public tipoUsuario:Usuarioo;

   // public usuario =  { nome: '', login: ''}
    constructor( private http:HttpClient,
        private bsMessage: BSMessage,
        private router: Router,
        private acessoResource: AcessoResource
        ) {}

         usuarioAutenticado : boolean = false;
        mostrarMenuEmitter = new EventEmitter<boolean>();


        fazerLogin(usuario: Usuarioo) {
            return this.acessoResource.login(usuario).toPromise()
                .then(data => {
                    this.usuarioAutenticado = true;
                    this.mostrarMenuEmitter.emit(true);

                    this.router.navigate(['/']);
                   // this.temPermissao();
                    return data;
                });
        }
        usuarioEstaAutenticado(){
            return this.usuarioAutenticado;

        }




    }



    /*    autenticar(usuario:Usuario,usuario2:Usuario){

                this.usuario['autenticado'] = true
                this.redirecionarUsuario(this.usuario)
                this.router.navigate(['/'])

            };

            redirecionarUsuario(usuario) {
                if (usuario.autenticado) {
                    this.router.navigate(['/inicio'])
                } else {
                    this.router.navigate(['/login'])
                }
            }

*/










