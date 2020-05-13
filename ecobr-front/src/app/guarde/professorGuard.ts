
//import { ProfessorGuarde } from './professorGuard';

import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot,CanDeactivate } from '@angular/router';
import { Professor } from './../cadastro/professor/professor';
import { Injectable } from '@angular/core';


@Injectable()
export class ProfessorGuarde implements CanDeactivate<Professor>{

    canDeactivate(
        component:Professor,
        route:ActivatedRouteSnapshot,
        state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>| boolean{




           return true;
        }
}
