"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var api_1 = require("primeng/api");
var MessagesDemoComponent = /** @class */ (function () {
    function MessagesDemoComponent(service, breadcrumbService) {
        this.service = service;
        this.breadcrumbService = breadcrumbService;
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Messages', routerLink: ['/messages'] }
        ]);
    }
    MessagesDemoComponent.prototype.showInfoViaToast = function () {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemoComponent.prototype.showWarnViaToast = function () {
        this.service.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemoComponent.prototype.showErrorViaToast = function () {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemoComponent.prototype.showSuccessViaToast = function () {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    };
    MessagesDemoComponent.prototype.showMultipleViaToast = function () {
        this.service.addAll([
            { key: 'tst', severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' },
            { key: 'tst', severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks' },
            { key: 'tst', severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' }
        ]);
    };
    MessagesDemoComponent.prototype.showInfoViaMessages = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemoComponent.prototype.showWarnViaMessages = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemoComponent.prototype.showErrorViaMessages = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemoComponent.prototype.showSuccessViaMessages = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    };
    MessagesDemoComponent.prototype.showMultipleViaMessages = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    MessagesDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './messagesdemo.component.html',
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n            margin-left: .25em;\n        }"
            ],
            providers: [breadcrumb_service_1.BreadcrumbService, api_1.MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [api_1.MessageService, breadcrumb_service_1.BreadcrumbService])
    ], MessagesDemoComponent);
    return MessagesDemoComponent;
}());
exports.MessagesDemoComponent = MessagesDemoComponent;
//# sourceMappingURL=messagesdemo.component.js.map