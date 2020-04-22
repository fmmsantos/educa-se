"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSUtils = /** @class */ (function () {
    function BSUtils() {
    }
    BSUtils.prototype.loadOptions = function (list) {
        var options = [{ value: null, label: 'Selecione Item ' }];
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            options.push({ value: item.codigo, label: item.nome });
        }
        return options;
    };
    BSUtils.prototype.loadOptionsEnums = function (list) {
        var options = [{ value: null, label: 'Selecione Item ' }];
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var item = list_2[_i];
            options.push({ value: item.codigo, label: item.nome });
        }
        return options;
    };
    BSUtils.prototype.setOptions = function (list) {
        var options = [];
        for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
            var item = list_3[_i];
            options.push({ codigo: item.codigo, nome: item.nome });
        }
        return options;
    };
    BSUtils.prototype.removeCaractererEspecial = function (value) {
        try {
            return value.replace(/[-[\]{}()*+?%&amp;amp;amp;amp;amp;@!?¨_:;.'"<>/=\\^$|#\b]/g, "");
        }
        catch (e) {
            return value;
        }
    };
    BSUtils.prototype.clone = function (object) {
        return Object.assign([], object);
    };
    BSUtils = tslib_1.__decorate([
        core_1.Injectable()
    ], BSUtils);
    return BSUtils;
}());
exports.BSUtils = BSUtils;
//# sourceMappingURL=BSUtils.service.js.map