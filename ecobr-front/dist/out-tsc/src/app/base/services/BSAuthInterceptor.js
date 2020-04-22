"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSAuth_service_1 = require("./BSAuth.service");
var BSMessage_service_1 = require("./BSMessage.service");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(bsAuth, bsMessage) {
        this.bsAuth = bsAuth;
        this.bsMessage = bsMessage;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var isUrlToken = (req.url.indexOf("/oauth/token") > 0);
        if (isUrlToken == true) {
            console.log('Solicitando token');
            console.log('Header Authorization:' + req.headers.get('Authorization'));
            console.log('Header Content-Type:' + req.headers.get('Content-Type'));
            console.log('Url' + req.url);
            //this.bsMessage.informa(req.url + ' - ' + req.method)
        }
        else {
            /*
            let tokenExpired = this.bsAuth.isTokenExpired();
            let solitandoToken = false
            while(tokenExpired){
              console.log('Aguardando refres token')
              if (solitandoToken == false){
                solitandoToken = true
                console.log('Solicitando token')
                this.bsAuth.refreshToken()
                console.log('Token atualizado')
                solitandoToken = false
              }
              tokenExpired = this.bsAuth.isTokenExpired();
            }
            console.log('Realizando request')
            */
            var access_token = localStorage.getItem('access_token');
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                },
            });
        }
        return next.handle(req);
    };
    AuthInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSAuth_service_1.BSAuth, BSMessage_service_1.BSMessage])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=BSAuthInterceptor.js.map