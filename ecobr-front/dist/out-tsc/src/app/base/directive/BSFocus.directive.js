"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSFocusDirective = /** @class */ (function () {
    function BSFocusDirective(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        //this.renderer.invokeElementMethod (this.hostElement.nativeElement, 'focus');
    }
    BSFocusDirective = tslib_1.__decorate([
        core_1.Directive({ selector: '[bs-focus]' }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], BSFocusDirective);
    return BSFocusDirective;
}());
exports.BSFocusDirective = BSFocusDirective;
//# sourceMappingURL=BSFocus.directive.js.map