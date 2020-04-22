"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carservice_1 = require("../service/carservice");
var eventservice_1 = require("../service/eventservice");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var DashboardDemoComponent = /** @class */ (function () {
    function DashboardDemoComponent(carService, eventService, breadcrumbService) {
        this.carService = carService;
        this.eventService = eventService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Dashboard', routerLink: [''] }
        ]);
    }
    DashboardDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.chartData = {
            labels: ['0', '1', '2', '3', '4', '5', '6'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [, 6, 3, 2, 7, 9,],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [, 2, 1, 3, 6, 8,],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };
        this.items = [
            { label: 'Save', icon: 'fa fa-check' },
            { label: 'Update', icon: 'fa fa-refresh' },
            { label: 'Delete', icon: 'fa fa-trash' }
        ];
    };
    DashboardDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './dashboard.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [carservice_1.CarService, eventservice_1.EventService, breadcrumb_service_1.BreadcrumbService])
    ], DashboardDemoComponent);
    return DashboardDemoComponent;
}());
exports.DashboardDemoComponent = DashboardDemoComponent;
//# sourceMappingURL=dashboarddemo.component.js.map