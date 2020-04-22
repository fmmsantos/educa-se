
import { Disciplina } from './cadastro/disciplina/disciplina';
import { FornecedorBuscarComponent } from './fornecedor/fornecedor-buscar/fornecedor-buscar.component';
import { FornecedorCadastroComponent } from './fornecedor/fornecedor-cadastro/fornecedor-cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Aluno } from './cadastro/aluno/aluno';
import { BSGuardRoute } from './base/services/BSGuardRoute.service';
import { Professor} from './cadastro/professor/professor';
import { Turma} from './cadastro/turma/turma';


import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
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
    { path: '', component: DashboardDemoComponent },

    { path: 'cadastro', component: FornecedorCadastroComponent },

    { path: 'aluno', component: Aluno },
    { path: 'professor', component: Professor},
    { path: 'disciplina', component: Disciplina},
    { path: 'turma', component: Turma},



];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
