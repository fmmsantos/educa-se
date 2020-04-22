"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var BreadcrumbService = /** @class */ (function () {
    function BreadcrumbService() {
        this.itemsSource = new rxjs_1.Subject();
        this.itemsHandler = this.itemsSource.asObservable();
    }
    BreadcrumbService.prototype.setItems = function (items) {
        this.itemsSource.next(items);
    };
    BreadcrumbService = tslib_1.__decorate([
        core_1.Injectable()
    ], BreadcrumbService);
    return BreadcrumbService;
}());
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map