"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSResource_service_1 = require("./BSResource.service");
var UsuarioResource = /** @class */ (function () {
    function UsuarioResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('');
    }
    UsuarioResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('usuarios/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    UsuarioResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('usuarios/consultar', requestPage);
    };
    UsuarioResource.prototype.atualizar = function (data) {
        return this.resoruce.put('usuarios/' + data.id + '/atualizar', data);
    };
    UsuarioResource.prototype.inserir = function (data) {
        return this.resoruce.post('usuarios/inserir', data);
    };
    UsuarioResource.prototype.detalhar = function (data) {
        return this.resoruce.get('usuarios/detalhar/' + data.id);
    };
    UsuarioResource.prototype.deletar = function (id) {
        return this.resoruce.delete('usuarios/deletar/' + id.toString());
    };
    UsuarioResource.prototype.login = function (data) {
        return this.resoruce.post('usuarios/login/', data);
    };
    UsuarioResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], UsuarioResource);
    return UsuarioResource;
}());
exports.UsuarioResource = UsuarioResource;
var ClienteResource = /** @class */ (function () {
    function ClienteResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('');
    }
    ClienteResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('clientes/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    ClienteResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('clientes/consultar', requestPage);
    };
    ClienteResource.prototype.listar = function () {
        return this.resoruce.get('clientes/listar');
    };
    ClienteResource.prototype.inserir = function (data) {
        return this.resoruce.post('clientes/inserir', data);
    };
    ClienteResource.prototype.atualizar = function (data) {
        return this.resoruce.put('clientes/' + data.id + '/atualizar', data);
    };
    ClienteResource.prototype.deletar = function (id) {
        return this.resoruce.delete('clientes/deletar/' + id.toString());
    };
    ClienteResource.prototype.getClienteByCpfCnpj = function (cpfCnpj) {
        return this.resoruce.get('clientes/get-cliente-by-cpfCnpj?cpfCnpj=' + cpfCnpj);
    };
    ClienteResource.prototype.getInfoPlanoByLogin = function (login) {
        return this.resoruce.get('clientes/get-info-plano-by-login?login=' + login);
    };
    ClienteResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], ClienteResource);
    return ClienteResource;
}());
exports.ClienteResource = ClienteResource;
var ChamadoResource = /** @class */ (function () {
    function ChamadoResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('');
    }
    ChamadoResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('chamados/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    ChamadoResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('chamados/consultar', requestPage);
    };
    ChamadoResource.prototype.listar = function () {
        return this.resoruce.get('chamados/listar');
    };
    ChamadoResource.prototype.inserir = function (data) {
        return this.resoruce.post('chamados/inserir', data);
    };
    ChamadoResource.prototype.atualizar = function (data) {
        return this.resoruce.put('chamados/' + data.id + '/atualizar', data);
    };
    ChamadoResource.prototype.deletar = function (id) {
        return this.resoruce.delete('chamados/deletar/' + id.toString());
    };
    ChamadoResource.prototype.getResumoChamadosByLogin = function (login) {
        return this.resoruce.get('chamados/get-resumo-chamados-by-login?login=' + login);
    };
    ChamadoResource.prototype.getChamadosByLogin = function (login) {
        return this.resoruce.get('chamados/get-chamados-by-login?login=' + login);
    };
    ChamadoResource.prototype.getMensagensChamadoByIdChamado = function (idChamado) {
        return this.resoruce.get('chamados/get-mensagens-chamado-by-idChamado?idChamado=' + idChamado);
    };
    ChamadoResource.prototype.gravarChamado = function (data) {
        return this.resoruce.post('chamados/gravar-chamado', data);
    };
    ChamadoResource.prototype.gravarMensagem = function (idChamado, mensagem) {
        return this.resoruce.get('chamados/gravar-mensagem?idChamado=' + idChamado + '&mensagem=' + mensagem);
    };
    ChamadoResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], ChamadoResource);
    return ChamadoResource;
}());
exports.ChamadoResource = ChamadoResource;
var TituloResource = /** @class */ (function () {
    function TituloResource(resoruce) {
        this.resoruce = resoruce;
        resoruce.setPath('');
    }
    TituloResource.prototype.consultars = function (pageable) {
        return this.resoruce.get('titulos/consultar?size=' + pageable.size + '&page=' + pageable.page);
    };
    TituloResource.prototype.consultar = function (requestPage) {
        return this.resoruce.post('titulos/consultar', requestPage);
    };
    TituloResource.prototype.listar = function () {
        return this.resoruce.get('titulos/listar');
    };
    TituloResource.prototype.inserir = function (data) {
        return this.resoruce.post('titulos/inserir', data);
    };
    TituloResource.prototype.atualizar = function (data) {
        return this.resoruce.put('titulos/' + data.id + '/atualizar', data);
    };
    TituloResource.prototype.deletar = function (id) {
        return this.resoruce.delete('titulos/deletar/' + id.toString());
    };
    TituloResource.prototype.getUlimaFaturaByLogin = function (login) {
        return this.resoruce.get('titulos/get-ultima-fatura-by-login?login=' + login);
    };
    TituloResource.prototype.listByLogin = function (login) {
        return this.resoruce.get('titulos/listByLogin?login=' + login);
    };
    TituloResource.prototype.downloadBoleto = function (idFatura) {
        return this.resoruce.get('titulos/download-boleto/' + idFatura);
    };
    TituloResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [BSResource_service_1.BSResource])
    ], TituloResource);
    return TituloResource;
}());
exports.TituloResource = TituloResource;
//# sourceMappingURL=app-model.services.js.map