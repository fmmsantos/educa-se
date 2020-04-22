import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BSAuth } from './BSAuth.service';
import { BSMessage } from './BSMessage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private bsAuth:BSAuth,private bsMessage:BSMessage){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let isUrlToken:Boolean = (req.url.indexOf("/oauth/token") > 0 )
    if (isUrlToken == true){
      console.log('Solicitando token')
      console.log('Header Authorization:' + req.headers.get('Authorization'))
      console.log('Header Content-Type:' +  req.headers.get('Content-Type'))
      console.log('Url' +  req.url)

      //this.bsMessage.informa(req.url + ' - ' + req.method)
    } else {
      /*
      let tokenExpired = this.bsAuth.isTokenExpired();
      let solitandoToken = false
      while(tokenExpired){
        console.log('Aguardando refres token')
        if (solitandoToken == false){
          solitandoToken = true
          console.log('Solicitando token')
          this.bsAuth.refreshToken()
          console.log('Token atualizado')
          solitandoToken = false
        }
        tokenExpired = this.bsAuth.isTokenExpired();
      }
      console.log('Realizando request')
      */
      let access_token = localStorage.getItem('access_token') 
        req = req.clone({
          setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization': 'Bearer ' + access_token
          },
        });
    }
    return next.handle(req);
  }
}