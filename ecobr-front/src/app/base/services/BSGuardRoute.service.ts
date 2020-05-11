import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BSAuth } from './BSAuth.service';

@Injectable()
export class BSGuardRoute implements CanActivate
{

     constructor(
        private bsAuth:BSAuth,
         private router:Router, private location:Location) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      //  console.log(this.router)
      //  console.log(this.bsAuth.usuario)

        if (this.bsAuth.usuarioAutenticado == null ||  this.bsAuth.usuarioAutenticado === undefined || this.bsAuth.usuarioAutenticado === false ){
            console.log(this.router)
            if (this.router['url'] == '/login' || this.router['url'] == '/' ){
                this.router.navigate(['/login'])
            }else{
                this.location.back()
            }
        }

        if (this.bsAuth.usuarioAutenticado !== undefined && this.bsAuth.usuarioAutenticado ){
            return true
        }
        return false;
    }
}
