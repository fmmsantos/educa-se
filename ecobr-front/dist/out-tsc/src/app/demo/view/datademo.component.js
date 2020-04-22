"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carservice_1 = require("../service/carservice");
var nodeservice_1 = require("../service/nodeservice");
var eventservice_1 = require("../service/eventservice");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var DataDemoComponent = /** @class */ (function () {
    function DataDemoComponent(carService, eventService, nodeService, breadcrumbService) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Data', routerLink: ['/data'] }
        ]);
    }
    DataDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.cols2 = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.files2 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.files3 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files4 = files; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'Volkswagen', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
        this.scheduleHeader = { left: 'prev,next today', center: 'title', right: 'month,agendaWeek,agendaDay' };
        this.data = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
        this.sortOptions = [
            { label: 'Newest First', value: '!year' },
            { label: 'Oldest First', value: 'year' },
            { label: 'Brand', value: 'brand' }
        ];
    };
    DataDemoComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    DataDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './datademo.component.html',
            styles: ["\n        .ui-dataview .search-icon {\n            margin-top: 3em;\n        }\n\n        .ui-dataview .filter-container {\n            text-align: center;\n        }\n\n        @media (max-width: 40em) {\n            .ui-dataview .car-details, .ui-dataview .search-icon{\n                text-align: center;\n                margin-top: 0;\n            }\n\n            .ui-dataview .filter-container {\n                text-align: left;\n            }\n        }\n    "],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [carservice_1.CarService, eventservice_1.EventService, nodeservice_1.NodeService,
            breadcrumb_service_1.BreadcrumbService])
    ], DataDemoComponent);
    return DataDemoComponent;
}());
exports.DataDemoComponent = DataDemoComponent;
//# sourceMappingURL=datademo.component.js.map