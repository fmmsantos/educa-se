"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get('assets/demo/data/countries.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    CountryService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=countryservice.js.map