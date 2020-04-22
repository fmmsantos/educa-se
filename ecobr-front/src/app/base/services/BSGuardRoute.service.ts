import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BSAuth } from './BSAuth.service';

@Injectable()
export class BSGuardRoute
//implements CanActivate
{

    /* constructor(
        private bsAuth:BSAuth,
         private router:Router, private location:Location) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log(this.router)
        console.log(this.bsAuth.usuario)
        /* Usuario nao autenticado, redireciona para rota de Login
        if (this.bsAuth.usuario == null ||  this.bsAuth.usuario === undefined || this.bsAuth.usuario.autenticado === false ){
            console.log(this.router)
            if (this.router['url'] == '/login' || this.router['url'] == '/' ){
                this.router.navigate(['/login'])
            }else{
                this.location.back()
            }
        }

        if (this.bsAuth.usuario.autenticado !== undefined && this.bsAuth.usuario.autenticado ){
            return true
        }
        return false;*/
}
