
import { BSUtils } from 'src/app/base/services/BSUtils.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { BSMessage } from 'src/app/base/services/BSMessage.service';
import { AlunoResource, TurmaResource } from 'src/app/model/app-model.services';
import {  Listbox } from 'primeng/primeng';




@Component({
    templateUrl: './aluno.html'
})
export class Aluno implements OnInit {
    @ViewChild('cboTurmas') cboTurmas:Listbox

    /**GRID */
    totalRecordsGrid: any;
    loadingGrid: boolean = true

    /* Controle Formulario */
    filtros: any = {}
    mostrarModalFiltro: boolean
    mostrarModalCadastro: boolean
    mostrarModalContato: boolean

    /* ngModel */
    registros: any = []
    registro: any = {}
    contato: any = {}

/*COMBO */
turmasOptions:any[] = [];


    /* OPTIONS */


    statusAlunoOptions = []
    /* tipos endereco */


    constructor(
        private breadcrumbService: BreadcrumbService,
        private bsMessage: BSMessage,
        private alunoResource: AlunoResource,
        private turmaResource:TurmaResource,
        private bsUtils: BSUtils,

    ) {
        this.breadcrumbService.setItems([
            { label: 'Cadastro' },
            { label: 'Aluno', routerLink: ['/aluno'] }
        ]);
    }

    ngOnInit() {
        this.mostrarModalFiltro = false
        this.consultarRegistros(25, 0);
        this.carregarCombos()

    }
    carregarCombos() {
        this.turmaResource.listar().subscribe(response => {
            // console.debug('Carregando combo turmas: ', response)
            this.turmasOptions = response as any as any[]
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
                dataEntrada: new Date(),
                turmas: []
            }

        }

        this.mostrarModalCadastro = true
    }


    fecharModalCadastro() {
        this.mostrarModalCadastro = false
        this.aplicarFiltros()
    }


    salvar() {
        const self = this;
        const registro = this.registro
        if (registro['nome'] == null) {
            this.bsMessage.avisa('Nome deve ser informado');
            return
        }

        if (self.registro['codigo'] == null) {
            this.alunoResource.inserir(registro).subscribe(response => {
                self.bsMessage.informa('Registro salvo com sucesso');
                self.fecharModalCadastro();


            });
        } else {
            this.alunoResource.atualizar(registro).subscribe(response => {
                this.bsMessage.informa('Registro atualizado com sucesso');
                self.bsMessage.informa('Registro atualizado com sucess');
                self.fecharModalCadastro();
            });
        }
    }
    limpar() {
        const self = this
        this.registro = {}


    }
    detalhar(registro) {
        const self = this
        self.alunoResource.detalhar(registro).subscribe(response => {
           self.registro = response


             //this.registro['statusAluno']= this.bsUtils.setOptions([{codigo : this.registro['statusAluno'], nome:this.registro['nome']}])


                self.abrirModalCadastro(false)
        });
    }
    remover(registro) {
        const self = this
        self.bsMessage.confirmar('Deseja excluir o item selecioanado: ' +  registro.nome + ' ?', function () {
            self.alunoResource.deletar(registro.codigo).subscribe(response => {
                self.bsMessage.informa('Registro excluído com sucesso')
                self.aplicarFiltros()
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
        self.alunoResource.consultar(requestPage).subscribe(response => {
            self.loadingGrid = false;
            self.registros = response.content
            self.totalRecordsGrid = response.totalElements
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro()
            }
        });
    }
}
