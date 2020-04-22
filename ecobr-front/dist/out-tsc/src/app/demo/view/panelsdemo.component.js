"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var PanelsDemoComponent = /** @class */ (function () {
    function PanelsDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Panels', routerLink: ['/panels'] }
        ]);
    }
    PanelsDemoComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Angular.io', icon: 'fa fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa fa-book', routerLink: ['/theming'] }
        ];
    };
    PanelsDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './panelsdemo.component.html',
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n            margin-left: .25em;\n        }\n\n        :host ::ng-deep .ui-splitbutton button {\n            margin-right: 0;\n        }"
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], PanelsDemoComponent);
    return PanelsDemoComponent;
}());
exports.PanelsDemoComponent = PanelsDemoComponent;
//# sourceMappingURL=panelsdemo.component.js.map