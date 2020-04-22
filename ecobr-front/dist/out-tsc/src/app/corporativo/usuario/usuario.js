"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var BSMessage_service_1 = require("src/app/base/services/BSMessage.service");
var app_model_services_1 = require("src/app/model/app-model.services");
var BSUtils_service_1 = require("src/app/base/services/BSUtils.service");
var primeng_1 = require("primeng/primeng");
var Usuario = /** @class */ (function () {
    function Usuario(breadcrumbService, bsMessage, usuarioResource, perfilResource, bsUtils) {
        this.breadcrumbService = breadcrumbService;
        this.bsMessage = bsMessage;
        this.usuarioResource = usuarioResource;
        this.perfilResource = perfilResource;
        this.bsUtils = bsUtils;
        this.loadingGrid = true;
        /* Controle Formulario */
        this.filtros = {};
        /* ngModel */
        this.registros = [];
        this.registro = {};
        /*COMBO */
        this.perfisOptions = [];
        this.breadcrumbService.setItems([
            { label: 'Corporativo' },
            { label: 'Usuário', routerLink: ['/usuario'] }
        ]);
    }
    Usuario.prototype.ngOnInit = function () {
        this.carregarCombos();
        this.mostrarModalFiltro = false;
        this.consultarRegistros(25, 0);
    };
    Usuario.prototype.carregarCombos = function () {
        var _this = this;
        this.perfilResource.listar().subscribe(function (response) {
            _this.perfisOptions = _this.bsUtils.loadOptions(response);
        });
    };
    Usuario.prototype.abrirModalFiltro = function () {
        this.mostrarModalFiltro = true;
    };
    Usuario.prototype.fecharModalFiltro = function () {
        this.registro = {};
        this.mostrarModalFiltro = false;
    };
    Usuario.prototype.abrirModalCadastro = function (novoRegistro) {
        if (novoRegistro) {
            this.registro = {};
        }
        this.mostrarModalCadastro = true;
    };
    Usuario.prototype.fecharModalCadastro = function () {
        this.mostrarModalCadastro = false;
        this.aplicarFiltros();
    };
    Usuario.prototype.salvar = function () {
        var self = this;
        if (self.registro['codigo'] == null) {
            self.usuarioResource.inserir(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro salvo com sucesso');
                self.fecharModalCadastro();
            });
        }
        else {
            self.usuarioResource.atualizar(self.registro).subscribe(function (response) {
                self.bsMessage.informa('Registro atualizado com sucess');
                self.fecharModalCadastro();
            });
        }
    };
    Usuario.prototype.limpar = function () {
        var self = this;
        self.registro = {};
    };
    Usuario.prototype.detalhar = function (registro) {
        var self = this;
        self.usuarioResource.detalhar(registro).subscribe(function (response) {
            self.registro = response;
            self.setarCombos();
            self.abrirModalCadastro(false);
        });
    };
    Usuario.prototype.setarCombos = function () {
        var self = this;
        self.registro.perfis = self.bsUtils.setOptions(self.registro.perfis);
        self.cboPerfis.ngOnInit();
    };
    Usuario.prototype.remover = function (registro) {
        var self = this;
        self.bsMessage.confirmar('Deseja excluir o item selecioanado: ' + registro.nome + ' ?', function () {
            self.usuarioResource.deletar(registro.codigo).subscribe(function (response) {
                self.bsMessage.informa('Registro excluído com sucesso');
                self.aplicarFiltros();
            });
        });
    };
    Usuario.prototype.aplicarFiltros = function () {
        this.consultarRegistros(25, 0);
    };
    Usuario.prototype.consultarRegistros = function (rows, page) {
        var self = this;
        var requestPage = {
            filtros: self.filtros
        };
        requestPage['page'] = page;
        requestPage['size'] = rows;
        self.loadingGrid = true;
        self.usuarioResource.consultar(requestPage).subscribe(function (response) {
            self.loadingGrid = false;
            self.registros = response.content;
            self.totalRecordsGrid = response.totalElements;
            if (self.mostrarModalFiltro) {
                self.fecharModalFiltro();
            }
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('cboPerfis'),
        tslib_1.__metadata("design:type", primeng_1.MultiSelect
        /**GRID */
        )
    ], Usuario.prototype, "cboPerfis", void 0);
    Usuario = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './usuario.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService,
            BSMessage_service_1.BSMessage,
            app_model_services_1.UsuarioResource,
            app_model_services_1.PerfilResource,
            BSUtils_service_1.BSUtils])
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map