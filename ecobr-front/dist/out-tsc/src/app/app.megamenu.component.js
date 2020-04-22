"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/animations");
var AppMegamenuComponent = /** @class */ (function () {
    function AppMegamenuComponent(app) {
        this.app = app;
    }
    AppMegamenuComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-megamenu',
            templateUrl: './app.megamenu.component.html',
            animations: [
                animations_1.trigger('children', [
                    animations_1.state('hiddenAnimated', animations_1.style({
                        height: '0px'
                    })),
                    animations_1.state('visibleAnimated', animations_1.style({
                        height: '*'
                    })),
                    animations_1.transition('visibleAnimated => hiddenAnimated', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    animations_1.transition('hiddenAnimated => visibleAnimated', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent])
    ], AppMegamenuComponent);
    return AppMegamenuComponent;
}());
exports.AppMegamenuComponent = AppMegamenuComponent;
//# sourceMappingURL=app.megamenu.component.js.map