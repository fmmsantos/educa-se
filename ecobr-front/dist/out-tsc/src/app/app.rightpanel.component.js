"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var primeng_1 = require("primeng/primeng");
var AppRightPanelComponent = /** @class */ (function () {
    function AppRightPanelComponent(app) {
        this.app = app;
    }
    AppRightPanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
    };
    AppRightPanelComponent.prototype.onTabChange = function (event) {
        var _this = this;
        setTimeout(function () { _this.rightPanelMenuScrollerViewChild.moveBar(); }, 450);
    };
    tslib_1.__decorate([
        core_1.ViewChild('scrollRightPanel'),
        tslib_1.__metadata("design:type", primeng_1.ScrollPanel)
    ], AppRightPanelComponent.prototype, "rightPanelMenuScrollerViewChild", void 0);
    AppRightPanelComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-rightpanel',
            templateUrl: './app.rightpanel.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent])
    ], AppRightPanelComponent);
    return AppRightPanelComponent;
}());
exports.AppRightPanelComponent = AppRightPanelComponent;
//# sourceMappingURL=app.rightpanel.component.js.map