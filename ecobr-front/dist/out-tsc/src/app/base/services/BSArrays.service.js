"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSArrays = /** @class */ (function () {
    function BSArrays() {
    }
    BSArrays.prototype.removerItem = function (array, item) {
        var indexOf = array.indexOf(item);
        array.splice(indexOf, 1);
    };
    BSArrays = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], BSArrays);
    return BSArrays;
}());
exports.BSArrays = BSArrays;
//# sourceMappingURL=BSArrays.service.js.map