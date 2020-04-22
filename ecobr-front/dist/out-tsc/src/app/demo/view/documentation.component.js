"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Documentation', routerLink: ['/documentation'] }
        ]);
    }
    DocumentationComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './documentation.component.html',
            styles: ["\n        .docs pre.doc-command {\n            font-family: monospace;\n            background-color: #ffffff;\n            color: #333333;\n            border: 1px solid #dfdfdf;\n            border-left: 10px solid #dae8ef;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 0;\n            overflow: auto;\n        }\n\n        .docs p {\n            line-height: 1.5;\n        }"
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], DocumentationComponent);
    return DocumentationComponent;
}());
exports.DocumentationComponent = DocumentationComponent;
//# sourceMappingURL=documentation.component.js.map