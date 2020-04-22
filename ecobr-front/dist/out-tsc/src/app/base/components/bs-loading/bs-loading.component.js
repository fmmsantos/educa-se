"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app_component_1 = require("src/app/app.component");
var BSLoading = /** @class */ (function () {
    function BSLoading(app) {
        this.app = app;
        // this.consultarRegistros(4,0)
    }
    BSLoading.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], BSLoading.prototype, "mensagem", void 0);
    BSLoading = tslib_1.__decorate([
        core_1.Component({
            selector: 'bs-loading',
            templateUrl: './bs-loading.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent])
    ], BSLoading);
    return BSLoading;
}());
exports.BSLoading = BSLoading;
//# sourceMappingURL=bs-loading.component.js.map