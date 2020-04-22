"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var multiselect_1 = require("primeng/multiselect");
var BSSetarCombo = /** @class */ (function () {
    function BSSetarCombo(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        console.log(this.cboPerfis);
    }
    tslib_1.__decorate([
        core_1.ViewChild('cboPerfis'),
        tslib_1.__metadata("design:type", multiselect_1.MultiSelect)
    ], BSSetarCombo.prototype, "cboPerfis", void 0);
    BSSetarCombo = tslib_1.__decorate([
        core_1.Directive({ selector: '[bs-setar-combo]' }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], BSSetarCombo);
    return BSSetarCombo;
}());
exports.BSSetarCombo = BSSetarCombo;
//# sourceMappingURL=BSSetarCombo.js.map