"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var BSMessage_service_1 = require("src/app/base/services/BSMessage.service");
var app_model_services_1 = require("src/app/model/app-model.services");
var BSUtils_service_1 = require("src/app/base/services/BSUtils.service");
var Permissao = /** @class */ (function () {
    function Permissao(breadcrumbService, bsMessage, moduloResource, funcionalidadeResource, perfilResource, permissaoResource, bsUtils) {
        this.breadcrumbService = breadcrumbService;
        this.bsMessage = bsMessage;
        this.moduloResource = moduloResource;
        this.funcionalidadeResource = funcionalidadeResource;
        this.perfilResource = perfilResource;
        this.permissaoResource = permissaoResource;
        this.bsUtils = bsUtils;
        this.loadingGrid = true;
        /* Controle Formulario */
        this.filtros = { perfil: {} };
        this.parametros = [];
        this.searchParams = { params: [] };
        this.permissoesRequest = [];
        /* ngModel */
        this.perfil = { codigo: null };
        this.registros = [];
        this.registro = {};
        /*COMBO */
        this.perfisOptions = [];
        this.modulosOptions = [];
        this.funcionalidadesOptions = [];
        this.breadcrumbService.setItems([
            { label: 'Corporativo' },
            { label: 'Permissões', routerLink: ['/permissao'] }
        ]);
    }
    Permissao.prototype.ngOnInit = function () {
        var _this = this;
        this.perfilResource.listar().subscribe(function (response) {
            _this.perfisOptions = _this.bsUtils.loadOptions(response);
        });
        this.moduloResource.listar().subscribe(function (response) {
            _this.modulosOptions = response;
            _this.funcionalidadeResource.listar().subscribe(function (response) {
                _this.funcionalidadesOptions = response;
                //this.preparaPermissoes()
            });
        });
        this.mostrarModalFiltro = false;
        this.consultarRegistros(25, 0);
    };
    Permissao.prototype.preparaPermissoes = function () {
        this.permissoesRequest = [];
        for (var _i = 0, _a = this.modulosOptions; _i < _a.length; _i++) {
            var modulo = _a[_i];
            for (var _b = 0, _c = this.funcionalidadesOptions; _b < _c.length; _b++) {
                var funcionalidade = _c[_b];
                var permissoesRequestLocal = {
                    modulo: { codigo: modulo.codigo, nome: modulo.nome },
                };
                if (funcionalidade.modulo.codigo === modulo.codigo) {
                    permissoesRequestLocal['funcionalidade'] = { codigo: funcionalidade.codigo, nome: funcionalidade.nome };
                    permissoesRequestLocal['menu'] = false,
                        permissoesRequestLocal['consultar'] = false,
                        permissoesRequestLocal['detalhar'] = false,
                        permissoesRequestLocal['inserir'] = false,
                        permissoesRequestLocal['atualizar'] = false,
                        permissoesRequestLocal['deletar'] = false;
                    this.permissoesRequest.push(permissoesRequestLocal);
                }
            }
        }
    };
    Permissao.prototype.getFuncionalidades = function (modulo) {
        var funcionalidades = [];
        for (var _i = 0, _a = this.permissoesRequest; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.modulo.codigo === modulo.codigo) {
                funcionalidades.push(item);
            }
        }
        return funcionalidades;
    };
    Permissao.prototype.mountJSONRequest = function () {
        console.log(JSON.stringify(this.permissoesRequest));
    };
    Permissao.prototype.abrirModalCadastro = function (novoRegistro) {
        var _this = this;
        if (this.perfil == null || this.perfil.codigo == null) {
            this.bsMessage.informa("Perfil deve ser selecionado");
            return;
        }
        if (novoRegistro) {
            this.registro = {};
        }
        var responseArray = [];
        this.permissaoResource.listarByidPerfil(this.perfil.codigo).subscribe(function (response) {
            responseArray = response;
            _this.preparaPermissoes();
            if (responseArray.length > 0) {
                for (var _i = 0, responseArray_1 = responseArray; _i < responseArray_1.length; _i++) {
                    var permissao = responseArray_1[_i];
                    for (var _a = 0, _b = _this.permissoesRequest; _a < _b.length; _a++) {
                        var permissaoLocal = _b[_a];
                        if (permissao.funcionalidade.codigo === permissaoLocal.funcionalidade.codigo) {
                            permissaoLocal['id'] = permissao['id'];
                            permissaoLocal['menu'] = permissao['menu'];
                            permissaoLocal['consultar'] = permissao['consultar'];
                            permissaoLocal['detalhar'] = permissao['detalhar'];
                            permissaoLocal['inserir'] = permissao['inserir'];
                            permissaoLocal['atualizar'] = permissao['atualizar'];
                            permissaoLocal['deletar'] = permissao['deletar'];
                            permissaoLocal['executar'] = permissao['executar'];
                            permissaoLocal['imprimir'] = permissao['imprimir'];
                        }
                    }
                }
            }
            _this.bsMessage.informa('Registro salvo com sucesso');
            _this.mostrarModalCadastro = true;
        });
    };
    Permissao.prototype.fecharModalCadastro = function () {
        this.mostrarModalCadastro = false;
        this.aplicarFiltros();
    };
    Permissao.prototype.salvar = function () {
        var _this = this;
        if (this.perfil == null) {
            this.bsMessage.avisa('Perfil deve ser selecionado');
            return;
        }
        var permissaoRequest = {
            permissoes: []
        };
        this.permissoesRequest.map(function (permissao) {
            permissao['perfil'] = _this.perfil;
            permissaoRequest['permissoes'].push(permissao);
        });
        this.permissaoResource.inserirPermissoesLote(permissaoRequest).subscribe(function (response) {
            _this.bsMessage.informa('Registro salvo com sucesso');
            _this.fecharModalCadastro();
        });
    };
    Permissao.prototype.limpar = function () {
        var self = this;
        self.registro = {};
    };
    Permissao.prototype.detalhar = function (registro) {
        var self = this;
        self.permissaoResource.detalhar(registro).subscribe(function (response) {
            self.registro = response;
            self.abrirModalCadastro(false);
        });
    };
    Permissao.prototype.remover = function (registro) {
        var self = this;
        self.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', function () {
            self.permissaoResource.deletar(registro.codigo).subscribe(function (response) {
                self.bsMessage.informa('Registro excluído com sucesso');
                self.aplicarFiltros();
            });
        });
    };
    Permissao.prototype.aplicarFiltros = function () {
        this.parametros = [];
        this.parametros.push({ campo: 'idPerfil', valor: this.perfil.codigo });
        this.consultarRegistros(25, 0);
    };
    Permissao.prototype.consultarRegistros = function (rows, page) {
        var self = this;
        var requestPage = {
            filtros: self.filtros,
            parametros: this.parametros
        };
        requestPage['page'] = page;
        requestPage['size'] = rows;
        self.loadingGrid = true;
        self.permissaoResource.consultar(requestPage).subscribe(function (response) {
            self.loadingGrid = false;
            self.registros = response.content;
            self.totalRecordsGrid = response.totalElements;
        });
    };
    Permissao = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './permissao.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService,
            BSMessage_service_1.BSMessage,
            app_model_services_1.ModuloResource,
            app_model_services_1.FuncionalidadeResource,
            app_model_services_1.PerfilResource,
            app_model_services_1.PermissaoResource,
            BSUtils_service_1.BSUtils])
    ], Permissao);
    return Permissao;
}());
exports.Permissao = Permissao;
//# sourceMappingURL=permissao.js.map