"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        return this.http.get('assets/demo/data/scheduleevents.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    EventService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=eventservice.js.map