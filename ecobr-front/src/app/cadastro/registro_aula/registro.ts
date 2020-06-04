import { TurmaResource, DisciplinaResource,FrequenciaAulaResource } from './../../model/app-model.services';
import { BSUtils } from 'src/app/base/services/BSUtils.service';
import { Component, OnInit,ViewChild ,ElementRef } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { BSMessage } from 'src/app/base/services/BSMessage.service';
import {RegistroAulaResource } from 'src/app/model/app-model.services';

import {  Listbox } from 'primeng/primeng';


@Component({
    templateUrl: './registro.html'
})
export class RegistroAula implements OnInit {
    @ViewChild('cboTurmas') cboTurmas:Listbox
    @ViewChild('cboDisciplinas') cboDisciplinas:Listbox
    /**GRID */
    totalRecordsGrid: any;
    loadingGrid: boolean = true


    /*COMBO */
    turmasOptions:any[] = [];
    disciplinasOptions:any[] = [];

    // grida alunos
    alunosFrequenciaAula : any[] = [];

    /* Controle Formulario */
    filtros: any = {}
    mostrarModalFiltro: boolean
    mostrarModalCadastro: boolean
    mostrarModalContato: boolean

    /* ngModel */
    registros: any = []
    registro: any = {}
    registroSalvo = false;

    /* endereco do sacado */
    endereco: any = {}
    contato: any = {}

    bimestreOptions = []
    bimestre:any = [
     {nome: '1ª Bimestre', codigo: 'PRIMEIRO_BIMESTRE'},
     {nome: '2ª Bimestre', codigo: 'SEGUNDO_BIMESTRE'},
     {nome: '3ª Bimestre', codigo: 'TERCEIRO_BIMESTRE'},
     {nome: '4ª Bimestre', codigo: 'QUARTO_BIMESTRE'}

 ];

    /* tipos endereco */

    constructor(
        private breadcrumbService: BreadcrumbService,
        private bsMessage: BSMessage,
        private registroResource: RegistroAulaResource,
        private bsUtils: BSUtils,
        private turmaResource:TurmaResource,
        private disciplinaResource:DisciplinaResource,
        private frequenciaAulaResource:FrequenciaAulaResource
    ) {
        this.breadcrumbService.setItems([
            { label: 'Cadastro' },
            { label: 'RegistroAula', routerLink: ['/registros'] }
        ]);
    }

    ngOnInit() {
       this.mostrarModalFiltro = false
        this.carregarTurmas()
        this.carregarDisciplinas()
        this.consultarRegistros(25, 0);

    }






    carregarTurmas() {
        this.turmaResource.listar().subscribe(response => {
            // console.debug('Carregando combo turmas: ', response)
            this.turmasOptions = response as any as any[]

        });
    }
    carregarDisciplinas() {
        this.disciplinaResource.listar().subscribe(response => {
            // console.debug('Carregando combo turmas: ', response)
            this.disciplinasOptions = response as any as any[]
        });
    }
    mostrar:boolean = false
    buscarAluno(){
        //this.mostrarModalFiltro = false
        const idTurma = this.registro.turma && this.registro.turma.codigo
        this.frequenciaAulaResource.listarAlunosByTurma(idTurma).subscribe(response => {
            this.alunosFrequenciaAula = response as any as any[];
        });
    }

    abrirModalFiltro() {
        this.mostrarModalFiltro = true
    }

    fecharModalFiltro() {
        this.registro = {}
        this.mostrarModalFiltro = false
    }

    abrirModalCadastro(novoRegistro) {
        if (novoRegistro) {
            this.registro = {
        }

        }

        this.mostrarModalCadastro = true
    }


    fecharModalCadastro() {
        this.mostrarModalCadastro = false
        this.aplicarFiltros()
    }

botaoSalvo = false
    salvar() {

        const registro = this.registro
        this.registro['bimestre']= this.registro.bimestre.codigo;
        if (registro['codigo'] == null) {
            this.registroResource.inserir(registro).subscribe(response => {
                this.bsMessage.informa('Registro salvo com sucesso');
                //this.fecharModalCadastro();
               // this.registroSalvo=false;
                //this.limpar();
                this.botaoSalvo=true

            });
        } else {
            this.registroResource.atualizar(registro).subscribe(response => {
                this.bsMessage.informa('Registro atualizado com sucesso');
                //this.fecharModalCadastro();
               // this.registroSalvo=false;
               // this.limpar();
            });
        }
    }
    salvarFrequencia() {

        const registro = this.registro

        if (registro['codigo'] == null) {
            this.frequenciaAulaResource.inserir(registro).subscribe(response => {
                this.bsMessage.informa('Registro salvo com sucesso');
                //this.fecharModalCadastro();
               // this.registroSalvo=false;
                //this.limpar();
                //this.botaoSalvo=true

            });
        } else {
            this.registroResource.atualizar(registro).subscribe(response => {
                this.bsMessage.informa('Registro atualizado com sucesso');
                //this.fecharModalCadastro();
               // this.registroSalvo=false;
               // this.limpar();
            });
        }
    }

    limpar() {
        this.registro = {}
       this.alunosFrequenciaAula.splice(this.registros,30);



    }
    detalhar(registro) {
        this.registroResource.detalhar(registro).subscribe(response => {
            this.registro = response

                this.abrirModalCadastro(false)
        });
    }
    remover(registro) {
        this.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', () => {
            this.registroResource.deletar(registro.codigo).subscribe(response => {
                this.bsMessage.informa('Registro excluído com sucesso')
                this.aplicarFiltros()
            });
        });
    }


    aplicarFiltros() {
        this.consultarRegistros(25, 0);
    }

    consultarRegistros(rows, page) {
        const self = this;

        const requestPage = {
            filtros: self.filtros
        };

        requestPage['page'] = page;
        requestPage['size'] = rows;

        self.loadingGrid = true;
        console.log(requestPage)
        self.frequenciaAulaResource.consultar(requestPage).subscribe(response => {
            self.loadingGrid = false;
            self.registros = response.content
            self.totalRecordsGrid = response.totalElements
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro()
           }
        });
    }
}

