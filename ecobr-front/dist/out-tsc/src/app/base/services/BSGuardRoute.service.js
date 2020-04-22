"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BSAuth_service_1 = require("./BSAuth.service");
var BSGuardRoute = /** @class */ (function () {
    function BSGuardRoute(bsAuth, router, location) {
        this.bsAuth = bsAuth;
        this.router = router;
        this.location = location;
    }
    BSGuardRoute.prototype.canActivate = function (route, state) {
        console.log(this.router);
        console.log(this.bsAuth.usuario);
        /* Usuario nao autenticado, redireciona para rota de Login  */
        if (this.bsAuth.usuario == null || this.bsAuth.usuario === undefined || this.bsAuth.usuario.autenticado === false) {
            console.log(this.router);
            if (this.router['url'] == '/login' || this.router['url'] == '/') {
                this.router.navigate(['/login']);
            }
            else {
                this.location.back();
            }
        }
        if (this.bsAuth.usuario.autenticado !== undefined && this.bsAuth.usuario.autenticado) {
            return true;
        }
        return false;
    };
    BSGuardRoute = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSAuth_service_1.BSAuth,
            router_1.Router, common_1.Location])
    ], BSGuardRoute);
    return BSGuardRoute;
}());
exports.BSGuardRoute = BSGuardRoute;
//# sourceMappingURL=BSGuardRoute.service.js.map