"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app_component_1 = require("src/app/app.component");
var BSGridComponent = /** @class */ (function () {
    function BSGridComponent(app) {
        this.app = app;
        this.filtros = {};
        this.newModal = false;
        this.results = [];
        this.loadingGrid = false;
        // this.consultarRegistros(4,0)
    }
    BSGridComponent.prototype.ngOnInit = function () {
    };
    BSGridComponent.prototype.loadGridLazy = function (event) {
        var self = this;
        this.loadingGrid = true;
        setTimeout(function () {
            var page = event.first / event.rows;
            //self.consultarRegistros(event.rows, page);
        }, 500);
    };
    BSGridComponent.prototype.getStyle = function (col) {
        var style = "'width':'" + ("" + col.width) + "'";
        return style;
    };
    BSGridComponent.prototype.getRowValue = function (col) {
        return col.field;
    };
    BSGridComponent.prototype.consultarRegistros = function (rows, page) {
        var self = this;
        var pageable = {
            size: rows,
            sort: 'id',
            page: page
        };
        var requestPage = {
            filtros: self.filtros
        };
        requestPage['page'] = page;
        requestPage['size'] = rows;
        self.loadingGrid = false;
        self.resourceControll.consultar(requestPage).then(function (response) {
            self.results = response.content;
            self.totalRecordsGrid = response.totalElements;
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], BSGridComponent.prototype, "titulo", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BSGridComponent.prototype, "newModal", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], BSGridComponent.prototype, "cols", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BSGridComponent.prototype, "resourceControll", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], BSGridComponent.prototype, "results", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BSGridComponent.prototype, "loadingGrid", void 0);
    BSGridComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'bs-grid',
            templateUrl: './bs-grid.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent])
    ], BSGridComponent);
    return BSGridComponent;
}());
exports.BSGridComponent = BSGridComponent;
//# sourceMappingURL=bs-grid.component.js.map