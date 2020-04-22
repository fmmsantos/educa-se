"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var angular_jwt_1 = require("@auth0/angular-jwt");
var operators_1 = require("rxjs/operators");
var environment_prod_1 = require("./../../../environments/environment.prod");
var BSMessage_service_1 = require("./BSMessage.service");
var router_1 = require("@angular/router");
var BSAuth = /** @class */ (function () {
    function BSAuth(http, bsMessage, router) {
        this.http = http;
        this.bsMessage = bsMessage;
        this.router = router;
        this.usuario = { nome: '', plano: '', login: '', autenticado: false };
        this.publishAutenticacao = new core_1.EventEmitter();
        this.jwtHelper = new angular_jwt_1.JwtHelperService();
    }
    BSAuth.prototype.autenticar = function (login, senha) {
        var _this = this;
        /*Prepare url token */
        var urlOauthToke = environment_prod_1.environment.apiUrl + 'oauth/token';
        //console.log('url:' + urlOauthToke)
        /*Prepare header */
        var headers = new http_1.HttpHeaders({
            'Authorization': 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        });
        /*Prepare body */
        var body = "username=" + login + "&password=" + senha + "&grant_type=password&scope=write";
        //console.log('body:' + body)
        this.http.post(urlOauthToke, body, { headers: headers, withCredentials: true })
            .pipe(operators_1.catchError(function (err) {
            _this.bsMessage.errorOnRequest(err);
            return Promise.reject(err);
        })).subscribe(function (response) {
            //  console.log(response)
            _this.loadInfoToken(_this.usuario, response);
            /*Grava o token no localstorage */
            _this.gravarTokenLocalStorage(response);
            _this.usuario['autenticado'] = true;
            _this.redirecionarUsuario(_this.usuario);
            _this.publicarLoginLogoutEvent(_this.usuario);
        });
    };
    BSAuth.prototype.logout = function () {
        this.usuario['autenticado'] = false;
        this.publicarLoginLogoutEvent(this.usuario);
        this.router.navigate(['/login']);
    };
    BSAuth.prototype.redirecionarUsuario = function (usuario) {
        if (usuario.autenticado) {
            this.router.navigate(['/dash']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    BSAuth.prototype.publicarLoginLogoutEvent = function (usuario) {
        this.publishAutenticacao.emit(usuario);
    };
    BSAuth.prototype.loadInfoToken = function (usuario, token) {
        var infoToken = this.jwtHelper.decodeToken(token['access_token']);
        usuario['login'] = infoToken.loginMkAuth;
        usuario['perfis'] = infoToken.authorities;
        usuario['ativo'] = infoToken.ativo;
        usuario['nome'] = infoToken.nome;
        usuario['loginOAuth'] = infoToken.login;
    };
    BSAuth.prototype.gravarTokenLocalStorage = function (token) {
        localStorage.setItem('access_token', token['access_token']);
        localStorage.setItem('refresh_token', token['refresh_token']);
    };
    BSAuth.prototype.limparTokenLocalStorage = function () {
        localStorage.setItem('access_token', null);
        localStorage.setItem('refresh_token', null);
    };
    BSAuth.prototype.refreshToken = function () {
        var _this = this;
        var urlOauthToke = environment_prod_1.environment.apiUrl + '/api/oauth/token';
        var headers = new http_1.HttpHeaders({
            'Authorization': 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        });
        var refresh_token = localStorage.getItem('refresh_token');
        var body = "grant_type=refresh_token&refresh_token=" + refresh_token;
        return this.http.post(urlOauthToke, body, { headers: headers, withCredentials: true })
            .pipe(operators_1.catchError(function (err) {
            _this.bsMessage.errorOnRequest(err);
            return Promise.reject(err);
        }), operators_1.map(function (response) {
            _this.gravarTokenLocalStorage(response);
            return Promise.resolve(response);
        }));
    };
    BSAuth.prototype.isTokenExpired = function () {
        var access_token = localStorage.getItem('access_token');
        if (!access_token) {
            return true;
        }
        var isTokenExpired = this.jwtHelper.isTokenExpired(access_token);
        return isTokenExpired;
    };
    BSAuth = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
            BSMessage_service_1.BSMessage,
            router_1.Router])
    ], BSAuth);
    return BSAuth;
}());
exports.BSAuth = BSAuth;
//# sourceMappingURL=BSAuth.service.js.map