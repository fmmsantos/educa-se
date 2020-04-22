"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BSDateComponent = /** @class */ (function () {
    function BSDateComponent() {
        this.value = new Date();
        this.valueChange = new core_1.EventEmitter();
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
        };
    }
    BSDateComponent.prototype.writeValue = function (obj) {
        throw new Error("Method not implemented.");
    };
    BSDateComponent.prototype.ngOnInit = function () {
    };
    BSDateComponent.prototype.registerOnChange = function (fn) {
        throw new Error("Method not implemented.");
    };
    BSDateComponent.prototype.registerOnTouched = function (fn) {
        throw new Error("Method not implemented.");
    };
    BSDateComponent.prototype.setDisabledState = function (isDisabled) {
        throw new Error("Method not implemented.");
    };
    BSDateComponent.prototype.change = function (value) {
        if (value.indexOf('-') <= 0 && value.length === 8) {
            console.log(value);
            this.value = new Date(value.substr(4, 4) + '/' + value.substr(2, 2) + '/' + value.substr(0, 2));
        }
        if (value.indexOf('-') >= 0 && value.length === 10) {
            this.value = new Date(value.substr(8, 2) + '/' + value.substr(5, 2) + '/' + value.substr(0, 4));
        }
        this.valueChange.emit(this.value);
    };
    BSDateComponent.prototype.onSelectMethod = function (event) {
        var value = new Date(Date.parse(event));
        this.valueChange.emit(value);
    };
    BSDateComponent.prototype.onChange = function (event) {
        alert(event);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BSDateComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], BSDateComponent.prototype, "valueChange", void 0);
    BSDateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'bs-date',
            templateUrl: './bs-date.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BSDateComponent);
    return BSDateComponent;
}());
exports.BSDateComponent = BSDateComponent;
//# sourceMappingURL=bs-date.component.js.map