"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var BSMessage_service_1 = require("src/app/base/services/BSMessage.service");
var app_model_services_1 = require("src/app/model/app-model.services");
var Modulo = /** @class */ (function () {
    function Modulo(breadcrumbService, bsMessage, moduloResource) {
        this.breadcrumbService = breadcrumbService;
        this.bsMessage = bsMessage;
        this.moduloResource = moduloResource;
        this.loadingGrid = true;
        /* Controle Formulario */
        this.filtros = {};
        /* ngModel */
        this.registros = [];
        this.registro = {};
        this.breadcrumbService.setItems([
            { label: 'Corporativo' },
            { label: 'Módulos', routerLink: ['/modulo'] }
        ]);
    }
    Modulo.prototype.ngOnInit = function () {
        this.mostrarModalFiltro = false;
        this.consultarRegistros(25, 0);
    };
    Modulo.prototype.abrirModalFiltro = function () {
        this.mostrarModalFiltro = true;
    };
    Modulo.prototype.fecharModalFiltro = function () {
        this.registro = {};
        this.mostrarModalFiltro = false;
    };
    Modulo.prototype.abrirModalCadastro = function (novoRegistro) {
        if (novoRegistro) {
            this.registro = {};
        }
        this.mostrarModalCadastro = true;
    };
    Modulo.prototype.fecharModalCadastro = function () {
        this.mostrarModalCadastro = false;
        this.aplicarFiltros();
    };
    Modulo.prototype.salvar = function () {
        var self = this;
        if (self.registro['codigo'] == null) {
            self.moduloResource.inserir(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro salvo com sucesso');
                self.fecharModalCadastro();
            });
        }
        else {
            self.moduloResource.atualizar(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro atualizado com sucess');
                self.fecharModalCadastro();
            });
        }
    };
    Modulo.prototype.limpar = function () {
        var self = this;
        self.registro = {};
    };
    Modulo.prototype.detalhar = function (registro) {
        var self = this;
        self.moduloResource.detalhar(registro).subscribe(function (response) {
            self.registro = response;
            self.abrirModalCadastro(false);
        });
    };
    Modulo.prototype.remover = function (registro) {
        var self = this;
        self.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', function () {
            self.moduloResource.deletar(registro.codigo).subscribe(function (response) {
                self.bsMessage.informa('Registro excluído com sucesso');
                self.aplicarFiltros();
            });
        });
    };
    Modulo.prototype.aplicarFiltros = function () {
        this.consultarRegistros(25, 0);
    };
    Modulo.prototype.consultarRegistros = function (rows, page) {
        var self = this;
        var requestPage = {
            filtros: self.filtros
        };
        requestPage['page'] = page;
        requestPage['size'] = rows;
        self.loadingGrid = true;
        self.moduloResource.consultar(requestPage).subscribe(function (response) {
            self.loadingGrid = false;
            self.registros = response.content;
            self.totalRecordsGrid = response.totalElements;
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro();
            }
        });
    };
    Modulo = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './modulo.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService,
            BSMessage_service_1.BSMessage,
            app_model_services_1.ModuloResource])
    ], Modulo);
    return Modulo;
}());
exports.Modulo = Modulo;
//# sourceMappingURL=modulo.js.map