import { RegistroAula } from './cadastro/registro_aula/registro';
import { CanDeactivate } from '@angular/router';
import { ProfessorGuarde } from './guarde/professorGuard';
import { CanActivateChild } from '@angular/router';

import {Login} from './cadastro/login/login';

import { Disciplina } from './cadastro/disciplina/disciplina';
import { FornecedorBuscarComponent } from './fornecedor/fornecedor-buscar/fornecedor-buscar.component';
import { FornecedorCadastroComponent } from './fornecedor/fornecedor-cadastro/fornecedor-cadastro.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Aluno } from './cadastro/aluno/aluno';
import { BSGuardRoute } from './base/services/BSGuardRoute.service';
import { Professor} from './cadastro/professor/professor';
import { Turma} from './cadastro/turma/turma';


import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { Usuario } from './cadastro/usuario/usuario';

//import { PaginaNaoEncontrada } from './base/paginaNaoEncontrada';
/**
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
 */
export const routes: Routes = [
    { path: '', component: DashboardDemoComponent, canActivate: [BSGuardRoute]},
    //{ path: "**", component: PaginaNaoEncontrada},
   {path: 'login', component: Login},
    { path: 'cadastro', component: FornecedorCadastroComponent,canActivate: [BSGuardRoute] },

    { path: 'usuario', component: Usuario,canActivate: [BSGuardRoute] },
    { path: 'aluno', component: Aluno,canActivate: [BSGuardRoute] },
    { path: 'professor', component: Professor,canActivate: [BSGuardRoute]
},
    { path: 'disciplina', component: Disciplina,canActivate: [BSGuardRoute]},
    { path: 'turma', component: Turma,canActivate: [BSGuardRoute]},
    { path: 'registro', component: RegistroAula,canActivate: [BSGuardRoute]},



];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
