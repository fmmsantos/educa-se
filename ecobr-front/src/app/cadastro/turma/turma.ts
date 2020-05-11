import { BSUtils } from 'src/app/base/services/BSUtils.service';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { BSMessage } from 'src/app/base/services/BSMessage.service';
import { TurmaResource } from 'src/app/model/app-model.services';


@Component({
    templateUrl: './turma.html'
})
export class Turma implements OnInit {

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

    ensinoOptions = []
   ensino:any = [
    {nome: 'Infantil', codigo: 'INFANTIL'},
    {nome: 'Fundamental I', codigo: 'FUND_I'},
    {nome: 'Fundamental II', codigo: 'FUND_II'},
    {nome: 'Médio', codigo: 'MEDIO'}

];

    /* endereco do sacado */
    endereco: any = {}
    contato: any = {}



    /* OPTIONS */

    /* tipos endereco */



    constructor(
        private breadcrumbService: BreadcrumbService,
        private bsMessage: BSMessage,
        private professorResource: TurmaResource,
        private bsUtils: BSUtils
    ) {
        this.breadcrumbService.setItems([
            { label: 'Cadastro' },
            { label: 'Turma', routerLink: ['/turma'] }
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

        /*Como no back esta esperando um ENUM, então temos que passar o cdigo o enum */

        this.registro['ensino']= this.registro.ensino.codigo;
        console.log(registro);

        if (registro['codigo'] == null) {
            this.professorResource.inserir(registro).subscribe(response => {
                this.bsMessage.informa('Registro salvo com sucesso');
                this.fecharModalCadastro();

            });
        } else {
            this.professorResource.atualizar(registro).subscribe(response => {
                this.bsMessage.informa('Registro atualizado com sucesso');
                this.fecharModalCadastro();
            });
        }
    }
    limpar() {
        this.registro = {}


    }
    detalhar(registro) {
        this.professorResource.detalhar(registro).subscribe(response => {
            this.registro = response
            this.registro['ensino']= this.registro.ensino.nome ;

           // this.registro['ensino'] =
           // this.bsUtils.loadOptionsEnums([{codigo : this.registro['ensino'],nome:this.registro['nome']}])

           // this.registro['ensino']= this.bsUtils.setOptions([{codigo
          //   : this.registro['ensino'], nome:this.registro['nome']}])



           console.log(this.registro),


                this.abrirModalCadastro(false)
        });
    }
    remover(registro) {
        this.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', () => {
            this.professorResource.deletar(registro.codigo).subscribe(response => {
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
        self.professorResource.consultar(requestPage).subscribe(response => {
            self.loadingGrid = false;
            self.registros = response.content
            self.totalRecordsGrid = response.totalElements
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro()
            }
        });
    }
}
