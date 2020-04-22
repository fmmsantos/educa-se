import { BSUtils } from 'src/app/base/services/BSUtils.service';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { BSMessage } from 'src/app/base/services/BSMessage.service';
import { DisciplinaResource } from 'src/app/model/app-model.services';



@Component({
    templateUrl: './disciplina.html'
})
export class Disciplina implements OnInit {

    /**GRID */
    totalRecordsGrid: any;
    loadingGrid: boolean = true

    /* Controle Formulario */
    filtros: any = {}
    mostrarModalFiltro: boolean
    mostrarModalCadastro: boolean


    /* ngModel */
    registros: any = []
    registro: any = {}



    /* OPTIONS */


    statusAlunoOptions = []
    /* tipos endereco */


    constructor(
        private breadcrumbService: BreadcrumbService,
        private bsMessage: BSMessage,
        private alunoResource: DisciplinaResource,
        private bsUtils: BSUtils,

    ) {
        this.breadcrumbService.setItems([
            { label: 'Cadastro' },
            { label: 'Disciplina', routerLink: ['/disciplina'] }
        ]);
    }

    ngOnInit() {
        this.mostrarModalFiltro = false
        this.consultarRegistros(25, 0);



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
               // contatos: []
            }

        }

        this.mostrarModalCadastro = true
    }


    fecharModalCadastro() {
        this.mostrarModalCadastro = false
        this.aplicarFiltros()
    }


    salvar() {

        const registro = this.registro


        if (registro['codigo'] == null) {
            this.alunoResource.inserir(registro).subscribe(response => {
                this.fecharModalCadastro();

            });
        } else {
            this.alunoResource.atualizar(registro).subscribe(response => {
                this.bsMessage.informa('Registro atualizado com sucesso');
                this.fecharModalCadastro();
            });
        }
    }
    limpar() {
        this.registro = {}


    }
    detalhar(registro) {
        this.alunoResource.detalhar(registro).subscribe(response => {
            this.registro = response


             //this.registro['statusAluno']= this.bsUtils.setOptions([{codigo : this.registro['statusAluno'], nome:this.registro['nome']}])


                this.abrirModalCadastro(false)
        });
    }
    remover(registro) {
        this.bsMessage.confirmar('Deseja excluir o item selecionado: ' + registro.nome + ' ?', () => {
            this.alunoResource.deletar(registro.codigo).subscribe(response => {
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
