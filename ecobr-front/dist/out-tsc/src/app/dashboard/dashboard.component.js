"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("../breadcrumb.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.dashboard = {};
        this.breadcrumbService.setItems([]);
        this.breadcrumbService.setItems([
            { label: 'Dashboard', routerLink: ['/dash'] }
        ]);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    DashboardComponent.prototype.refresh = function () {
        /*
        this.pesquisaColaboradorResource.getDashboard().subscribe(response => {
            this.dashboard = response
           // setTimeout(() => { this.refresh(); }, 5000);
        });
        */
    };
    DashboardComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './dashboard.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map