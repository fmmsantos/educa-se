"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BSMessage_service_1 = require("./../base/services/BSMessage.service");
var core_1 = require("@angular/core");
var BSAuth_service_1 = require("../base/services/BSAuth.service");
var common_1 = require("@angular/common");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(bsAuth, location, bsMessage) {
        this.bsAuth = bsAuth;
        this.location = location;
        this.bsMessage = bsMessage;
        this.sair = false;
        var self = this;
    }
    LogoutComponent.prototype.logout = function () {
        this.bsAuth.logout();
    };
    LogoutComponent.prototype.noLogout = function () {
        this.location.back();
    };
    LogoutComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './logout.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [BSAuth_service_1.BSAuth, common_1.Location, BSMessage_service_1.BSMessage])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map