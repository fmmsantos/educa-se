"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var BSMessage_service_1 = require("./BSMessage.service");
var operators_1 = require("rxjs/operators");
var BSResource = /** @class */ (function () {
    function BSResource(http, bsMessage) {
        this.http = http;
        this.bsMessage = bsMessage;
    }
    BSResource.prototype.setPath = function (path) {
        this.path = path + '/';
    };
    BSResource.prototype.getBLOB = function (method) {
        var _this = this;
        return this.http.get(this.path + method, {
            headers: new http_1.HttpHeaders({}), responseType: 'blob'
        }).pipe(operators_1.catchError(function (err) {
            _this.bsMessage.errorOnRequest(err);
            return Promise.reject(err);
        }));
    };
    BSResource.prototype.get = function (method, data) {
        var _this = this;
        if (data != undefined) {
            return this.http.get(this.path + method + '?' + data).pipe(operators_1.catchError(function (err) {
                _this.bsMessage.errorOnRequest(err);
                return Promise.reject(err);
            }));
        }
        else {
            return this.http.get(this.path + method).pipe(operators_1.catchError(function (err) {
                _this.bsMessage.errorOnRequest(err);
                return Promise.reject(err);
            }));
        }
    };
    BSResource.prototype.post = function (method, data) {
        var _this = this;
        return this.http.post(this.path + method, data).pipe(operators_1.catchError(function (err) {
            _this.bsMessage.errorOnRequest(err);
            return Promise.reject(err);
        }));
    };
    BSResource.prototype.delete = function (method) {
        var _this = this;
        return this.http.delete(this.path + method).pipe(operators_1.catchError(function (err) {
            _this.bsMessage.errorOnRequest(err);
            return Promise.reject(err);
        }));
    };
    BSResource.prototype.put = function (method, data) {
        var _this = this;
        return this.http.put(this.path + method, data).pipe(operators_1.catchError(function (err) {
            _this.bsMessage.errorOnRequest(err);
            return Promise.reject(err);
        }));
    };
    BSResource = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, BSMessage_service_1.BSMessage])
    ], BSResource);
    return BSResource;
}());
exports.BSResource = BSResource;
//# sourceMappingURL=BSResource.service.js.map