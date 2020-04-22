"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSAuth_service_1 = require("../base/services/BSAuth.service");
var BSMessage_service_1 = require("../base/services/BSMessage.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(bsAuth, bsMessage) {
        this.bsAuth = bsAuth;
        this.bsMessage = bsMessage;
        this.usuario = { login: 'sys_admin', senha: '123456' };
        this.liberarLogin = false;
        this.recaptcha = window.grecaptcha;
        this.login();
    }
    LoginComponent.prototype.login = function () {
        this.liberarLogin = true;
        if (this.liberarLogin === false) {
            this.bsMessage.avisa("Operação não habilitada");
            return;
        }
        if (this.usuario.login == null) {
            this.bsMessage.error("Usuário deve ser informado");
            return;
        }
        if (this.usuario.senha == null) {
            this.bsMessage.error("Informe Senha");
            return;
        }
        this.bsAuth.autenticar(this.usuario.login, this.usuario.senha);
    };
    LoginComponent.prototype.onKey = function (event) {
        if (event['key'] == 'Enter' && this.usuario.login != null) {
            this.login();
        }
    };
    LoginComponent.prototype.showResponse = function (response) {
        this.liberarLogin = response != null;
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './login.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [BSAuth_service_1.BSAuth, BSMessage_service_1.BSMessage])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map