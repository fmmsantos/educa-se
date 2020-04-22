"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var app_component_1 = require("./app.component");
var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent(app) {
        this.app = app;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        this.model = [
            { label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/'] },
            {
                label: 'Corporativo', icon: 'fa fa-fw fa-sitemap',
                items: [
                    { label: 'Módulos', icon: 'fa fa-fw fa-columns', routerLink: ['/modulo'] },
                    { label: 'Funcionalidades', icon: 'fa fa-fw fa-columns', routerLink: ['/funcionalidade'] },
                    { label: 'Pefil', icon: 'fa fa-fw fa-columns', routerLink: ['/perfil'] },
                    { label: 'Usuários', icon: 'fa fa-fw fa-user', routerLink: ['/usuario'] },
                    { label: 'Permissão', icon: 'fa fa-fw fa-key', routerLink: ['/permissao'] },
                    { label: 'Habilitação', icon: 'fa fa-fw fa-list-alt', routerLink: ['/pagina-construcao'] },
                ]
            },
            {
                label: 'Cadastros', icon: 'fa fa-fw fa-life-saver',
                items: [
                    { label: 'Documentos', icon: 'fa fa-fw fa-table', routerLink: ['/pagina-construcao'] },
                    { label: 'Fidc', icon: 'fa fa-fw fa-table', routerLink: ['/pagina-construcao'] },
                    { label: 'Gestoras', icon: 'fa fa-fw fa-table', routerLink: ['/pagina-construcao'] },
                    { label: 'Carteiras', icon: 'fa fa-fw fa-table', routerLink: ['/pagina-construcao'] },
                    { label: 'Produtos', icon: 'fa fa-fw fa-table', routerLink: ['/pagina-construcao'] },
                    { label: 'Tarifas / Créditos', icon: 'fa fa-fw fa-table', routerLink: ['/pagina-construcao'] }
                ]
            },
            {
                label: 'Formalização', icon: 'fa fa-fw fa-sitemap',
                items: [
                    { label: 'Sacados', icon: 'fa fa-fw fa-code', routerLink: ['/sacado'] },
                    { label: 'Cedentes', icon: 'fa fa-fw fa-columns', routerLink: ['/pagina-construcao'] },
                    { label: 'Credores', icon: 'fa fa-fw fa-columns', routerLink: ['/pagina-construcao'] },
                    { label: 'Carteiras', icon: 'fa fa-fw fa-table', routerLink: ['/pagina-construcao'] }
                ]
            },
            {
                label: 'Remessa', icon: 'fa fa-fw fa-life-saver',
                items: [
                    { label: 'CNAB', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'Cheque', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'XML', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'Digitação', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'Enviar Lastro', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] }
                ]
            },
            {
                label: 'Crédito', icon: 'fa fa-fw fa-life-saver',
                items: [
                    { label: 'CNAB', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'Cheque', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'XML', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'Digitação', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] },
                    { label: 'Enviar Lastro', icon: 'fa fa-fw fa-square-o', routerLink: ['/pagina-construcao'] }
                ]
            }
        ];
    };
    AppMenuComponent.prototype.changeTheme = function (theme, scheme) {
        var layoutLink = document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        var themeLink = document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        this.app.menuMode = scheme;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AppMenuComponent.prototype, "reset", void 0);
    AppMenuComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-menu',
            template: "\n        <ul app-submenu [item]=\"model\" root=\"true\" class=\"layout-menu\"\n            [reset]=\"reset\" visible=\"true\" parentActive=\"true\"></ul>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent])
    ], AppMenuComponent);
    return AppMenuComponent;
}());
exports.AppMenuComponent = AppMenuComponent;
var AppSubMenuComponent = /** @class */ (function () {
    function AppSubMenuComponent(app) {
        this.app = app;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        var _this = this;
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(function () {
                _this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSubMenuComponent.prototype, "parentActive", {
        get: function () {
            return this._parentActive;
        },
        set: function (val) {
            this._parentActive = val;
            if (!this._parentActive) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AppSubMenuComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "root", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "reset", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "parentActive", null);
    AppSubMenuComponent = tslib_1.__decorate([
        core_1.Component({
            /* tslint:disable:component-selector */
            selector: '[app-submenu]',
            /* tslint:enable:component-selector */
            template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\" *ngIf=\"child.visible === false ? false : true\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\"\n                   class=\"ripplelink\" *ngIf=\"!child.routerLink\"\n                   [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i [ngClass]=\"child.icon\"></i><span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"fa fa-fw fa-angle-down layout-menuitem-toggler\" *ngIf=\"child.items\"></i>\n                </a>\n\n                <a (click)=\"itemClick($event,child,i)\" class=\"ripplelink\" *ngIf=\"child.routerLink\"\n                   [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n                   [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i [ngClass]=\"child.icon\"></i><span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"fa fa-fw fa-angle-down layout-menuitem-toggler\" *ngIf=\"child.items\"></i>\n                </a>\n                <div class=\"submenu-arrow\" *ngIf=\"child.items\"></div>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\" [parentActive]=\"isActive(i)\"\n                    [@children]=\" isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n            </li>\n        </ng-template>\n    ",
            animations: [
                animations_1.trigger('children', [
                    animations_1.state('hiddenAnimated', animations_1.style({
                        height: '0px',
                        opacity: 0
                    })),
                    animations_1.state('visibleAnimated', animations_1.style({
                        height: '*',
                        opacity: 1
                    })),
                    animations_1.transition('visibleAnimated => hiddenAnimated', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    animations_1.transition('hiddenAnimated => visibleAnimated', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent])
    ], AppSubMenuComponent);
    return AppSubMenuComponent;
}());
exports.AppSubMenuComponent = AppSubMenuComponent;
//# sourceMappingURL=app.menu.component.js.map