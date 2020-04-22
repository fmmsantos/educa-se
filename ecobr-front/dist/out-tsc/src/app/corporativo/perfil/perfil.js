"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var BSMessage_service_1 = require("src/app/base/services/BSMessage.service");
var app_model_services_1 = require("src/app/model/app-model.services");
var Perfil = /** @class */ (function () {
    function Perfil(breadcrumbService, bsMessage, perfilResource) {
        this.breadcrumbService = breadcrumbService;
        this.bsMessage = bsMessage;
        this.perfilResource = perfilResource;
        this.loadingGrid = true;
        /* Controle Formulario */
        this.filtros = {};
        /* ngModel */
        this.registros = [];
        this.registro = {};
        this.breadcrumbService.setItems([
            { label: 'Corporativo' },
            { label: 'Perfil', routerLink: ['/perfil'] }
        ]);
    }
    Perfil.prototype.ngOnInit = function () {
        this.mostrarModalFiltro = false;
        this.consultarRegistros(25, 0);
    };
    Perfil.prototype.abrirModalFiltro = function () {
        this.mostrarModalFiltro = true;
    };
    Perfil.prototype.fecharModalFiltro = function () {
        this.registro = {};
        this.mostrarModalFiltro = false;
    };
    Perfil.prototype.abrirModalCadastro = function (novoRegistro) {
        if (novoRegistro) {
            this.registro = {};
        }
        this.mostrarModalCadastro = true;
    };
    Perfil.prototype.fecharModalCadastro = function () {
        this.mostrarModalCadastro = false;
        this.aplicarFiltros();
    };
    Perfil.prototype.salvar = function () {
        var self = this;
        if (self.registro['codigo'] == null) {
            self.perfilResource.inserir(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro salvo com sucesso');
                self.fecharModalCadastro();
            });
        }
        else {
            self.perfilResource.atualizar(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro atualizado com sucess');
                self.fecharModalCadastro();
            });
        }
    };
    Perfil.prototype.limpar = function () {
        var self = this;
        self.registro = {};
    };
    Perfil.prototype.detalhar = function (registro) {
        var self = this;
        self.perfilResource.detalhar(registro).subscribe(function (response) {
            self.registro = response;
            self.abrirModalCadastro(false);
        });
    };
    Perfil.prototype.remover = function (registro) {
        var self = this;
        self.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', function () {
            self.perfilResource.deletar(registro.codigo).subscribe(function (response) {
                self.bsMessage.informa('Registro excluído com sucesso');
                self.aplicarFiltros();
            });
        });
    };
    Perfil.prototype.aplicarFiltros = function () {
        this.consultarRegistros(25, 0);
    };
    Perfil.prototype.consultarRegistros = function (rows, page) {
        var self = this;
        var requestPage = {
            filtros: self.filtros
        };
        requestPage['page'] = page;
        requestPage['size'] = rows;
        self.loadingGrid = true;
        self.perfilResource.consultar(requestPage).subscribe(function (response) {
            self.loadingGrid = false;
            self.registros = response.content;
            self.totalRecordsGrid = response.totalElements;
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro();
            }
        });
    };
    Perfil = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './perfil.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService,
            BSMessage_service_1.BSMessage,
            app_model_services_1.PerfilResource])
    ], Perfil);
    return Perfil;
}());
exports.Perfil = Perfil;
//# sourceMappingURL=perfil.js.map