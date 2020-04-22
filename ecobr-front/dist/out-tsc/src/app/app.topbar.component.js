"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var BSAuth_service_1 = require("./base/services/BSAuth.service");
var AppTopBarComponent = /** @class */ (function () {
    function AppTopBarComponent(app, bsAuth) {
        this.app = app;
        this.bsAuth = bsAuth;
        this.usuario = {};
        this.usuario = bsAuth.usuario;
    }
    AppTopBarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-topbar',
            templateUrl: './app.topbar.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent, BSAuth_service_1.BSAuth])
    ], AppTopBarComponent);
    return AppTopBarComponent;
}());
exports.AppTopBarComponent = AppTopBarComponent;
//# sourceMappingURL=app.topbar.component.js.map