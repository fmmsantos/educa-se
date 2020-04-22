"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
    }
    NodeService.prototype.getFiles = function () {
        return this.http.get('assets/demo/data/files.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    NodeService.prototype.getFilesystem = function () {
        return this.http.get('assets/demo/data/filesystem.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    NodeService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], NodeService);
    return NodeService;
}());
exports.NodeService = NodeService;
//# sourceMappingURL=nodeservice.js.map