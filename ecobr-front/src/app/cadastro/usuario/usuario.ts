import { BSUtils } from 'src/app/base/services/BSUtils.service';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { BSMessage } from 'src/app/base/services/BSMessage.service';
import { UsuarioResource } from 'src/app/model/app-model.services';


@Component({
    templateUrl: './usuario.html'
})
export class Usuario implements OnInit {

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

    tipoUsuarioOptions = []
    tipoUsuario:any = [
     {nome: 'Professor', codigo: 'PROFESSOR'},
     {nome: 'Secretário', codigo: 'SECRETARIO'},
     {nome: 'Coordenador', codigo: 'COORDENADOR'},
     {nome: 'Diretor', codigo: 'DIRETOR'}

 ];



    constructor(
        private breadcrumbService: BreadcrumbService,
        private bsMessage: BSMessage,
        private usuarioResource: UsuarioResource,
        private bsUtils: BSUtils
    ) {
        this.breadcrumbService.setItems([
            { label: 'Cadastro' },
            { label: 'Usuario', routerLink: ['/usuarios'] }
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
        if (registro['nome'] == null) {
            this.bsMessage.avisa('Nome deve ser informado');
            return
        }
        if (registro['email'] == null) {
            this.bsMessage.avisa('O email deve ser informado');
            return
        }
        if (registro['senha'] == null) {
            this.bsMessage.avisa('Senha deve ser informado');
            return
        }


        /*Como no back esta esperando um ENUM, então temos que passar o cdigo o enum */
        this.registro['tipoUsuario']= this.registro.tipoUsuario.codigo;

        if (registro['codigo'] == null) {
            this.usuarioResource.inserir(registro).subscribe(response => {
                this.bsMessage.informa('Registro salvo com sucesso');
                this.fecharModalCadastro();

            });
        } else {
            this.usuarioResource.atualizar(registro).subscribe(response => {
                this.bsMessage.informa('Registro atualizado com sucesso');
                this.fecharModalCadastro();
            });
        }
    }
    limpar() {
        this.registro = {}


    }
    detalhar(registro) {
        this.usuarioResource.detalhar(registro).subscribe(response => {
            this.registro = response
            this.registro['tipoUsuario']= this.bsUtils.setOptions([{codigo
                : this.registro['tipoUsuario'], nome:this.registro['nome']}])




                this.abrirModalCadastro(false)
        });
    }
    remover(registro) {
        this.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', () => {
            this.usuarioResource.deletar(registro.codigo).subscribe(response => {
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
        self.usuarioResource.consultar(requestPage).subscribe(response => {
            self.loadingGrid = false;
            self.registros = response.content
            self.totalRecordsGrid = response.totalElements
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro()
            }
        });
    }
}
