"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BSUtils_service_1 = require("src/app/base/services/BSUtils.service");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var BSMessage_service_1 = require("src/app/base/services/BSMessage.service");
var app_model_services_1 = require("src/app/model/app-model.services");
var Sacado = /** @class */ (function () {
    function Sacado(breadcrumbService, bsMessage, sacadoResource, bsUtils) {
        this.breadcrumbService = breadcrumbService;
        this.bsMessage = bsMessage;
        this.sacadoResource = sacadoResource;
        this.bsUtils = bsUtils;
        this.loadingGrid = true;
        /* Controle Formulario */
        this.filtros = {};
        /* ngModel */
        this.registros = [];
        this.registro = {};
        /* endereco do sacado */
        this.endereco = {};
        this.contato = {};
        /* OPTIONS */
        this.tipoEnderecoOptions = [];
        this.tipoEstadoOptions = [];
        this.tipoContatoOptions = [];
        /* tipos endereco */
        this.tipoEndereco = [
            { codigo: 'RESIDENCIAL', nome: 'Residencial' },
            { codigo: 'COMERCIAL', nome: 'Comercial' },
            { codigo: 'ENTREGA', nome: 'Entrega' },
            { codigo: 'CORRESPONDENCIA', nome: 'Correspondência' },
            { codigo: 'COBRANCA', nome: 'Cobrança' }
        ];
        this.tipoEstado = [
            { codigo: 'AP', nome: 'Amapá' },
            { codigo: 'AC', nome: 'Acre' },
            { codigo: 'AL', nome: 'Alagoas' },
            { codigo: 'AM', nome: 'Amazonas' },
            { codigo: 'BA', nome: 'Bahia' },
            { codigo: 'CE', nome: 'Ceará' },
            { codigo: 'DF', nome: 'Distrito Federal' },
            { codigo: 'ES', nome: 'Espírito Santo' },
            { codigo: 'GO', nome: ' Goiás' },
            { codigo: 'MA', nome: 'Maranhão' },
            { codigo: 'MT', nome: ' Mato Grosso' },
            { codigo: 'MS', nome: ' Mato Grosso do Sul' },
            { codigo: 'MG', nome: 'Minas Gerais' },
            { codigo: 'PA', nome: 'Pará' },
            { codigo: 'PB', nome: 'Paraíba' },
            { codigo: 'PR', nome: 'Paraná' },
            { codigo: 'PE', nome: 'Pernambuco' },
            { codigo: 'PI', nome: 'Piauí' },
            { codigo: 'RJ', nome: 'Rio de Janeiro' },
            { codigo: 'RN', nome: ' Rio Grande do Norte' },
            { codigo: 'RS', nome: ' Rio Grande do Sul' },
            { codigo: 'RR', nome: ' Roraima' },
            { codigo: 'RO', nome: ' Rondônia' },
            { codigo: 'SC', nome: 'Santa Catarina' },
            { codigo: 'SP', nome: ' São Paulo' },
            { codigo: 'SE', nome: '  Sergipe' },
            { codigo: 'TO', nome: '  Tocantins' }
        ];
        this.tipoContato = [
            { codigo: 'RESIDENCIAL', nome: 'Residencial' },
            { codigo: 'COMERCIAL', nome: 'Comercial' },
            { codigo: 'CELULAR', nome: 'Celular' },
            { codigo: 'PARENTE', nome: 'Parente' },
            { codigo: 'RECADO', nome: 'Recado' }
        ];
        this.breadcrumbService.setItems([
            { label: 'Formalização' },
            { label: 'Sacados', routerLink: ['/sacado'] }
        ]);
    }
    Sacado.prototype.ngOnInit = function () {
        this.mostrarModalFiltro = false;
        this.consultarRegistros(25, 0);
        this.carregarCombos();
    };
    Sacado.prototype.carregarCombos = function () {
        this.tipoEnderecoOptions = this.bsUtils.loadOptions(this.tipoEndereco);
        this.tipoEstadoOptions = this.bsUtils.loadOptions(this.tipoEstado);
        this.tipoContatoOptions = this.bsUtils.loadOptions(this.tipoContato);
    };
    Sacado.prototype.abrirModalFiltro = function () {
        this.mostrarModalFiltro = true;
    };
    Sacado.prototype.fecharModalFiltro = function () {
        this.registro = {};
        this.mostrarModalFiltro = false;
    };
    Sacado.prototype.abrirModalCadastro = function (novoRegistro) {
        if (novoRegistro) {
            this.registro = {
                dataRegistro: new Date()
            };
            this.endereco = {};
            this.contato = {};
        }
        this.mostrarModalCadastro = true;
    };
    Sacado.prototype.fecharModalCadastro = function () {
        this.mostrarModalCadastro = false;
        this.aplicarFiltros();
    };
    Sacado.prototype.salvar = function () {
        var _this = this;
        var registro = this.registro;
        if (registro['nome'] == null) {
            this.bsMessage.avisa('Nome deve ser informado');
            return;
        }
        if (registro['dataNascimento'] == null) {
            this.bsMessage.avisa('Data de Nascimento deve ser informado');
            return;
        }
        if (registro['cpfCnpj'] == null) {
            this.bsMessage.avisa('Cpf ou o Cnpj deve ser informado');
            return;
        }
        //Quem [e] o professor?
        // atualiza o endereco
        // observa uma coisa, no backend vc modelou para o sacado ter mais de um endereco
        // no front, vc um sacado soh pode ter um endereco
        // no codigo abaixo eu estou criando um array e adionando o endereco na primeira posicao
        // isso pode acontecer, vc deixa o back flexivel e pode depois adicionar essa funcionalidade no front
        /*Como no back esta esperando um ENUM, então temos que passar o cdigo o enum */
        this.endereco['tipoEndereco'] = this.endereco.tipoEndereco.codigo;
        this.endereco['tipoEstado'] = this.endereco.tipoEstado.codigo;
        this.contato['tipoContato'] = this.contato.tipoContato.codigo;
        this.endereco['sacado'] = { codigo: this.registro.codigo };
        registro.enderecos = [this.endereco];
        this.contato['sacado'] = { codigo: this.registro.codigo };
        registro.contatos = [this.contato];
        //  registro.enderecos.tipoEndereco =[this.endereco.tipoEndereco]
        //   registro.contatos = [this.contato]
        // o equivalante a isso
        /*
        registro.enderecos = []
        registro.enderecos.push(this.endereco)
        */
        console.log(registro);
        if (registro['codigo'] == null) {
            this.sacadoResource.inserir(registro).subscribe(function (response) {
                _this.bsMessage.informa('Registro salvo com sucesso');
                _this.fecharModalCadastro();
            });
        }
        else {
            this.sacadoResource.atualizar(registro).subscribe(function (response) {
                _this.bsMessage.informa('Registro atualizado com sucesso');
                _this.fecharModalCadastro();
            });
        }
    };
    Sacado.prototype.limpar = function () {
        this.registro = {};
        this.endereco = {};
        this.contato = {};
    };
    Sacado.prototype.detalhar = function (registro) {
        var _this = this;
        this.sacadoResource.detalhar(registro).subscribe(function (response) {
            _this.registro = response;
            // esse codigo abaixo seta o valor da variavel endereco para o primeiro elemento do array enderecos
            // se esse valor for nulo, endereco seta um objeto vazio ({})
            _this.endereco = _this.registro.enderecos[0] || {};
            _this.contato = _this.registro.contatos[0] || {};
            _this.endereco['tipoEndereco'] = _this.bsUtils.setOptions([{ codigo: _this.endereco['tipoEndereco'], nome: _this.endereco['nome'] }]);
            console.log(_this.endereco);
            _this.abrirModalCadastro(false);
        });
    };
    Sacado.prototype.remover = function (registro) {
        var _this = this;
        this.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', function () {
            _this.sacadoResource.deletar(registro.codigo).subscribe(function (response) {
                _this.bsMessage.informa('Registro excluído com sucesso');
                _this.aplicarFiltros();
            });
        });
    };
    Sacado.prototype.aplicarFiltros = function () {
        this.consultarRegistros(25, 0);
    };
    Sacado.prototype.consultarRegistros = function (rows, page) {
        var self = this;
        var requestPage = {
            filtros: self.filtros
        };
        requestPage['page'] = page;
        requestPage['size'] = rows;
        self.loadingGrid = true;
        console.log(requestPage);
        self.sacadoResource.consultar(requestPage).subscribe(function (response) {
            self.loadingGrid = false;
            self.registros = response.content;
            self.totalRecordsGrid = response.totalElements;
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro();
            }
        });
    };
    Sacado = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './sacado.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService,
            BSMessage_service_1.BSMessage,
            app_model_services_1.SacadoResource,
            BSUtils_service_1.BSUtils])
    ], Sacado);
    return Sacado;
}());
exports.Sacado = Sacado;
//# sourceMappingURL=sacado.js.map
