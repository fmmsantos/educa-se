"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var BSMessage_service_1 = require("src/app/base/services/BSMessage.service");
var app_model_services_1 = require("src/app/model/app-model.services");
var BSUtils_service_1 = require("src/app/base/services/BSUtils.service");
var primeng_1 = require("primeng/primeng");
var Funcionalidade = /** @class */ (function () {
    function Funcionalidade(breadcrumbService, bsMessage, moduloResource, funcionalidadeResource, bsUtils) {
        this.breadcrumbService = breadcrumbService;
        this.bsMessage = bsMessage;
        this.moduloResource = moduloResource;
        this.funcionalidadeResource = funcionalidadeResource;
        this.bsUtils = bsUtils;
        this.loadingGrid = true;
        /* Controle Formulario */
        this.filtros = {};
        /* ngModel */
        this.registros = [];
        this.registro = {};
        /*COMBO */
        this.modulosOptions = [];
        this.breadcrumbService.setItems([
            { label: 'Corporativo' },
            { label: 'Funcionalidades', routerLink: ['/funcionalidade'] }
        ]);
    }
    Funcionalidade.prototype.ngOnInit = function () {
        this.carregarCombos();
        this.mostrarModalFiltro = false;
        this.consultarRegistros(25, 0);
    };
    Funcionalidade.prototype.carregarCombos = function () {
        var _this = this;
        this.moduloResource.listar().subscribe(function (response) {
            _this.modulosOptions = _this.bsUtils.loadOptions(response);
        });
    };
    Funcionalidade.prototype.abrirModalFiltro = function () {
        this.mostrarModalFiltro = true;
    };
    Funcionalidade.prototype.fecharModalFiltro = function () {
        this.registro = {};
        this.mostrarModalFiltro = false;
    };
    Funcionalidade.prototype.abrirModalCadastro = function (novoRegistro) {
        if (novoRegistro) {
            this.registro = {};
        }
        this.mostrarModalCadastro = true;
    };
    Funcionalidade.prototype.fecharModalCadastro = function () {
        this.mostrarModalCadastro = false;
        this.aplicarFiltros();
    };
    Funcionalidade.prototype.salvar = function () {
        var self = this;
        if (self.registro['codigo'] == null) {
            self.funcionalidadeResource.inserir(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro salvo com sucesso');
                self.fecharModalCadastro();
            });
        }
        else {
            self.funcionalidadeResource.atualizar(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro atualizado com sucess');
                self.fecharModalCadastro();
            });
        }
    };
    Funcionalidade.prototype.limpar = function () {
        var self = this;
        self.registro = {};
    };
    Funcionalidade.prototype.detalhar = function (registro) {
        var self = this;
        self.funcionalidadeResource.detalhar(registro).subscribe(function (response) {
            self.registro = response;
            self.abrirModalCadastro(false);
        });
    };
    Funcionalidade.prototype.remover = function (registro) {
        var _this = this;
        this.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', function () {
            _this.funcionalidadeResource.deletar(registro.codigo).subscribe(function (response) {
                _this.bsMessage.informa('Registro excluído com sucesso');
                _this.aplicarFiltros();
            });
        });
    };
    Funcionalidade.prototype.aplicarFiltros = function () {
        this.consultarRegistros(25, 0);
    };
    Funcionalidade.prototype.consultarRegistros = function (rows, page) {
        var self = this;
        var requestPage = {
            filtros: self.filtros
        };
        requestPage['page'] = page;
        requestPage['size'] = rows;
        self.loadingGrid = true;
        self.funcionalidadeResource.consultar(requestPage).subscribe(function (response) {
            self.loadingGrid = false;
            self.registros = response.content;
            self.totalRecordsGrid = response.totalElements;
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro();
            }
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('cboModulos'),
        tslib_1.__metadata("design:type", primeng_1.Listbox
        /**GRID */
        )
    ], Funcionalidade.prototype, "cboModulos", void 0);
    Funcionalidade = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './funcionalidade.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService,
            BSMessage_service_1.BSMessage,
            app_model_services_1.ModuloResource,
            app_model_services_1.FuncionalidadeResource,
            BSUtils_service_1.BSUtils])
    ], Funcionalidade);
    return Funcionalidade;
}());
exports.Funcionalidade = Funcionalidade;
//# sourceMappingURL=funcionalidade.js.map