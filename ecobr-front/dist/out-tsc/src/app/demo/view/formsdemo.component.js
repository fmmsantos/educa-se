"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var countryservice_1 = require("../service/countryservice");
var breadcrumb_service_1 = require("../../breadcrumb.service");
var FormsDemoComponent = /** @class */ (function () {
    function FormsDemoComponent(countryService, breadcrumbService) {
        this.countryService = countryService;
        this.breadcrumbService = breadcrumbService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'Volkswagen'];
        this.yesterday = new Date();
        this.selectedMultiSelectCars = [];
        this.checkboxValues = [];
        this.rangeValues = [20, 80];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Forms', routerLink: ['/forms'] }
        ]);
    }
    FormsDemoComponent.prototype.ngOnInit = function () {
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: 0 });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.citiesListbox = this.cities.slice(1);
        this.types = [];
        this.types.push({ label: 'Xbox One', value: 'Xbox One' });
        this.types.push({ label: 'PS4', value: 'PS4' });
        this.types.push({ label: 'Wii U', value: 'Wii U' });
        this.splitButtonItems = [
            { label: 'Update', icon: 'fa fa-refresh' },
            { label: 'Delete', icon: 'fa fa-close' },
            { label: 'Home', icon: 'fa fa-home', url: 'http://www.primefaces.org/primeng' }
        ];
    };
    FormsDemoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    FormsDemoComponent.prototype.searchCountry = function (query, countries) {
        // in a real application, make a request to a remote url with the query and return filtered results,
        // for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    FormsDemoComponent.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    FormsDemoComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './formsdemo.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [countryservice_1.CountryService, breadcrumb_service_1.BreadcrumbService])
    ], FormsDemoComponent);
    return FormsDemoComponent;
}());
exports.FormsDemoComponent = FormsDemoComponent;
//# sourceMappingURL=formsdemo.component.js.map