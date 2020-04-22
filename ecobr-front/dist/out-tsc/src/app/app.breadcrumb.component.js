"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("./breadcrumb.service");
var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(breadcrumbService) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
            _this.items = response;
        });
    }
    AppBreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppBreadcrumbComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-breadcrumb',
            templateUrl: './app.breadcrumb.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], AppBreadcrumbComponent);
    return AppBreadcrumbComponent;
}());
exports.AppBreadcrumbComponent = AppBreadcrumbComponent;
//# sourceMappingURL=app.breadcrumb.component.js.map