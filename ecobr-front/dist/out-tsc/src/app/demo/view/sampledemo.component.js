"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var SampleDemoComponent = /** @class */ (function () {
    function SampleDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        /* ngModel */
        this.registros = [];
        this.registro = {};
        this.breadcrumbService.setItems([
            { label: 'Corporativo' },
            { label: 'Perfil', routerLink: ['/sample'] }
        ]);
    }
    SampleDemoComponent.prototype.ngOnInit = function () {
        this.mostrarModalFiltro = false;
    };
    SampleDemoComponent.prototype.abrirModalFiltro = function () {
        this.mostrarModalFiltro = true;
    };
    SampleDemoComponent.prototype.fecharModalFiltro = function () {
        this.mostrarModalFiltro = false;
    };
    SampleDemoComponent.prototype.abrirModalCadastro = function () {
        this.mostrarModalCadastro = true;
    };
    SampleDemoComponent.prototype.fecharModalCadastro = function () {
        this.mostrarModalCadastro = false;
    };
    SampleDemoComponent.prototype.salvar = function () {
        var self = this;
        if (self.registro['nome'] == null) {
            alert('Nome deve ser informado');
            return;
        }
        console.log(self.registros);
        self.registro['codigo'] = self.registros.length + 1;
        self.registros.push(self.registro);
        self.registro = {};
        self.fecharModalCadastro();
    };
    SampleDemoComponent.prototype.limpar = function () {
        var self = this;
        self.registro = {};
    };
    SampleDemoComponent.prototype.detalhar = function (registro) {
        var self = this;
        this.registro = registro;
        this.abrirModalCadastro();
    };
    SampleDemoComponent.prototype.aplicarFiltros = function () {
        this.fecharModalFiltro();
    };
    SampleDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './sampledemo.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], SampleDemoComponent);
    return SampleDemoComponent;
}());
exports.SampleDemoComponent = SampleDemoComponent;
//# sourceMappingURL=sampledemo.component.js.map