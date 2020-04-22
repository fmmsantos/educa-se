"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var EmptyDemoComponent = /** @class */ (function () {
    function EmptyDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Empty', routerLink: ['/empty'] }
        ]);
    }
    EmptyDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './emptydemo.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], EmptyDemoComponent);
    return EmptyDemoComponent;
}());
exports.EmptyDemoComponent = EmptyDemoComponent;
//# sourceMappingURL=emptydemo.component.js.map