"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carservice_1 = require("../service/carservice");
var primeng_1 = require("primeng/primeng");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var OverlaysDemoComponent = /** @class */ (function () {
    function OverlaysDemoComponent(carService, confirmationService, breadcrumbService) {
        this.carService = carService;
        this.confirmationService = confirmationService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Overlays', routerLink: ['/overlays'] }
        ]);
    }
    OverlaysDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars.splice(0, 5); });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.images = [];
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Sopranos 1'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Sopranos 2'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Sopranos 3'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Sopranos 4'
        });
    };
    OverlaysDemoComponent.prototype.confirm = function () {
        this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
        });
    };
    OverlaysDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './overlaysdemo.component.html',
            providers: [primeng_1.ConfirmationService]
        }),
        tslib_1.__metadata("design:paramtypes", [carservice_1.CarService, primeng_1.ConfirmationService,
            breadcrumb_service_1.BreadcrumbService])
    ], OverlaysDemoComponent);
    return OverlaysDemoComponent;
}());
exports.OverlaysDemoComponent = OverlaysDemoComponent;
//# sourceMappingURL=overlaysdemo.component.js.map