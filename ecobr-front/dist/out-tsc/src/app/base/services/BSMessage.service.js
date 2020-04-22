"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var api_1 = require("primeng/api");
var primeng_1 = require("primeng/primeng");
var BSMessage = /** @class */ (function () {
    function BSMessage(messageService, confirmationService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
    }
    BSMessage.prototype.sucesso = function (mensagem) {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: "" + mensagem });
    };
    BSMessage.prototype.informa = function (mensagem) {
        this.messageService.add({ severity: 'info', summary: 'Informa', detail: "" + mensagem });
    };
    BSMessage.prototype.avisa = function (mensagem) {
        this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: "" + mensagem });
    };
    BSMessage.prototype.error = function (mensagem) {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: "" + mensagem });
    };
    BSMessage.prototype.confirmar = function (mensagem, callbackAccetp) {
        this.confirmationService.confirm({
            message: "" + mensagem,
            header: 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                callbackAccetp();
            },
            reject: function () {
                console.log(mensagem + ' - NAO');
            }
        });
    };
    BSMessage.prototype.errorOnRequest = function (error) {
        var statusCode = error['status'];
        if (statusCode == 403) {
            this.error('Falha na autenticação do usuário, Login ou Senha inválido');
        }
        else {
            if (statusCode === 504) {
                this.informa('Aplicação indisponivel no momento, por favor tente mais tarde!');
            }
            else if (statusCode === 401) {
                this.error('Usuário não autorizado');
            }
            else {
                console.log(error);
                this.informa('Ops, tivemos um problema ao tratar sua requisição' + error);
            }
        }
    };
    BSMessage = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [api_1.MessageService, primeng_1.ConfirmationService])
    ], BSMessage);
    return BSMessage;
}());
exports.BSMessage = BSMessage;
//# sourceMappingURL=BSMessage.service.js.map