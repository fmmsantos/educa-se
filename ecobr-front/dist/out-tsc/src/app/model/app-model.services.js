"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSResource_service_1 = require("../base/services/BSResource.service");
var AcessoResource = /** @class */ (function () {
    function AcessoResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('api');
    }
    AcessoResource.prototype.login = function (data) {
        return this.resoruce.post('acesso/login/', data);
    };
    AcessoResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], AcessoResource);
    return AcessoResource;
}());
exports.AcessoResource = AcessoResource;
var PerfilResource = /** @class */ (function () {
    function PerfilResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('api');
    }
    PerfilResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('perfis/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    PerfilResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('perfis/consultar', requestPage);
    };
    PerfilResource.prototype.listar = function () {
        return this.resoruce.get('perfis/listar');
    };
    PerfilResource.prototype.inserir = function (data) {
        return this.resoruce.post('perfis/inserir', data);
    };
    PerfilResource.prototype.atualizar = function (data) {
        return this.resoruce.put('perfis/' + data.codigo + '/atualizar', data);
    };
    PerfilResource.prototype.deletar = function (id) {
        return this.resoruce.delete('perfis/deletar/' + id.toString());
    };
    PerfilResource.prototype.detalhar = function (data) {
        return this.resoruce.get('perfis/detalhar/' + data.codigo);
    };
    PerfilResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], PerfilResource);
    return PerfilResource;
}());
exports.PerfilResource = PerfilResource;
var UsuarioResource = /** @class */ (function () {
    function UsuarioResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('api');
    }
    UsuarioResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('usuarios/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    UsuarioResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('usuarios/consultar', requestPage);
    };
    UsuarioResource.prototype.listar = function () {
        return this.resoruce.get('usuarios/listar');
    };
    UsuarioResource.prototype.inserir = function (data) {
        return this.resoruce.post('usuarios/inserir', data);
    };
    UsuarioResource.prototype.atualizar = function (data) {
        return this.resoruce.put('usuarios/' + data.codigo + '/atualizar', data);
    };
    UsuarioResource.prototype.deletar = function (id) {
        return this.resoruce.delete('usuarios/deletar/' + id.toString());
    };
    UsuarioResource.prototype.detalhar = function (data) {
        return this.resoruce.get('usuarios/detalhar/' + data.codigo);
    };
    UsuarioResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], UsuarioResource);
    return UsuarioResource;
}());
exports.UsuarioResource = UsuarioResource;
var ModuloResource = /** @class */ (function () {
    function ModuloResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('api');
    }
    ModuloResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('modulos/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    ModuloResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('modulos/consultar', requestPage);
    };
    ModuloResource.prototype.listar = function () {
        return this.resoruce.get('modulos/listar');
    };
    ModuloResource.prototype.inserir = function (data) {
        return this.resoruce.post('modulos/inserir', data);
    };
    ModuloResource.prototype.atualizar = function (data) {
        return this.resoruce.put('modulos/' + data.codigo + '/atualizar', data);
    };
    ModuloResource.prototype.deletar = function (id) {
        return this.resoruce.delete('modulos/deletar/' + id.toString());
    };
    ModuloResource.prototype.detalhar = function (data) {
        return this.resoruce.get('modulos/detalhar/' + data.codigo);
    };
    ModuloResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], ModuloResource);
    return ModuloResource;
}());
exports.ModuloResource = ModuloResource;
var SacadoResource = /** @class */ (function () {
    function SacadoResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('api');
    }
    SacadoResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('sacados/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    SacadoResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('sacados/consultar', requestPage);
    };
    SacadoResource.prototype.listar = function () {
        return this.resoruce.get('sacados/listar');
    };
    SacadoResource.prototype.inserir = function (data) {
        return this.resoruce.post('sacados/inserir', data);
    };
    SacadoResource.prototype.atualizar = function (data) {
        return this.resoruce.put('sacados/' + data.codigo + '/atualizar', data);
    };
    SacadoResource.prototype.deletar = function (id) {
        return this.resoruce.delete('sacados/deletar/' + id.toString());
    };
    SacadoResource.prototype.detalhar = function (data) {
        return this.resoruce.get('sacados/detalhar/' + data.codigo);
    };
    SacadoResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], SacadoResource);
    return SacadoResource;
}());
exports.SacadoResource = SacadoResource;
var FuncionalidadeResource = /** @class */ (function () {
    function FuncionalidadeResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('api');
    }
    FuncionalidadeResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('funcionalidades/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    FuncionalidadeResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('funcionalidades/consultar', requestPage);
    };
    FuncionalidadeResource.prototype.listar = function () {
        return this.resoruce.get('funcionalidades/listar');
    };
    FuncionalidadeResource.prototype.inserir = function (data) {
        return this.resoruce.post('funcionalidades/inserir', data);
    };
    FuncionalidadeResource.prototype.atualizar = function (data) {
        return this.resoruce.put('funcionalidades/' + data.codigo + '/atualizar', data);
    };
    FuncionalidadeResource.prototype.deletar = function (id) {
        return this.resoruce.delete('funcionalidades/deletar/' + id.toString());
    };
    FuncionalidadeResource.prototype.detalhar = function (data) {
        return this.resoruce.get('funcionalidades/detalhar/' + data.codigo);
    };
    FuncionalidadeResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], FuncionalidadeResource);
    return FuncionalidadeResource;
}());
exports.FuncionalidadeResource = FuncionalidadeResource;
var PermissaoResource = /** @class */ (function () {
    function PermissaoResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('api');
    }
    PermissaoResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('permissoes/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    PermissaoResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('permissoes/consultar', requestPage);
    };
    PermissaoResource.prototype.listar = function () {
        return this.resoruce.get('permissoes/listar');
    };
    PermissaoResource.prototype.inserir = function (data) {
        return this.resoruce.post('permissoes/inserir', data);
    };
    PermissaoResource.prototype.atualizar = function (data) {
        return this.resoruce.put('permissoes/' + data.codigo + '/atualizar', data);
    };
    PermissaoResource.prototype.deletar = function (id) {
        return this.resoruce.delete('permissoes/deletar/' + id.toString());
    };
    PermissaoResource.prototype.detalhar = function (data) {
        return this.resoruce.get('permissoes/detalhar/' + data.codigo);
    };
    PermissaoResource.prototype.inserirPermissoesLote = function (data) {
        return this.resoruce.post('permissoes/inserir-lote-permissoes', data);
    };
    PermissaoResource.prototype.listarByidPerfil = function (idPerfil) {
        return this.resoruce.get('permissoes/listar-by-id-perfil?idPerfil=' + idPerfil);
    };
    PermissaoResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], PermissaoResource);
    return PermissaoResource;
}());
exports.PermissaoResource = PermissaoResource;
//# sourceMappingURL=app-model.services.js.map