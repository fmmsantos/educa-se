"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var FileDemoComponent = /** @class */ (function () {
    function FileDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.uploadedFiles = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'File', routerLink: ['/file'] }
        ]);
    }
    FileDemoComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Upload Completed' });
    };
    FileDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './filedemo.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], FileDemoComponent);
    return FileDemoComponent;
}());
exports.FileDemoComponent = FileDemoComponent;
//# sourceMappingURL=filedemo.component.js.map