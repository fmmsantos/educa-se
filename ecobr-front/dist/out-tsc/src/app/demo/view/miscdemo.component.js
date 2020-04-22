"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var terminalservice_1 = require("primeng/components/terminal/terminalservice");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var MiscDemoComponent = /** @class */ (function () {
    function MiscDemoComponent(terminalService, breadcrumbService) {
        var _this = this;
        this.terminalService = terminalService;
        this.breadcrumbService = breadcrumbService;
        this.value = 0;
        this.subscription = this.terminalService.commandHandler.subscribe(function (command) {
            var response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            _this.terminalService.sendResponse(response);
        });
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Misc', routerLink: ['/misc'] }
        ]);
    }
    MiscDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                clearInterval(_this.interval);
                _this.interval = null;
            }
        }, 2000);
        this.images = [];
        this.images.push({ source: 'assets/demo/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/demo/images/nature/nature2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/demo/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/demo/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/demo/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/demo/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/demo/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    };
    MiscDemoComponent.prototype.onCommand = function (event) {
        if (event.command === 'date') {
            this.response = new Date().toDateString();
        }
        else {
            this.response = 'Unknown command: ' + event.command;
        }
    };
    MiscDemoComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    MiscDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './miscdemo.component.html',
            providers: [terminalservice_1.TerminalService]
        }),
        tslib_1.__metadata("design:paramtypes", [terminalservice_1.TerminalService, breadcrumb_service_1.BreadcrumbService])
    ], MiscDemoComponent);
    return MiscDemoComponent;
}());
exports.MiscDemoComponent = MiscDemoComponent;
//# sourceMappingURL=miscdemo.component.js.map