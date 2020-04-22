"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var primeng_1 = require("primeng/primeng");
var BSAuth_service_1 = require("./base/services/BSAuth.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, bsAuth) {
        this.renderer = renderer;
        this.bsAuth = bsAuth;
        this.usuarioAutenticado = { autenticado: false };
        this.layoutMode = 'static';
        this.megaMenuMode = 'dark';
        this.menuMode = 'light';
        this.profileMode = 'top';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsAuth.publishAutenticacao.subscribe(function (usuarioAutenticado) { return _this.usuarioAutenticado = usuarioAutenticado; });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    };
    AppComponent.prototype.onLayoutClick = function () {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }
        if (!this.megaMenuClick) {
            this.megaMenuActive = false;
        }
        if (!this.menuClick) {
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
        this.megaMenuClick = false;
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.menuClick = true;
        this.topbarMenuActive = false;
        if (this.layoutMode === 'overlay') {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }
        }
        event.preventDefault();
    };
    AppComponent.prototype.onMenuClick = function ($event) {
        this.menuClick = true;
        this.resetMenu = false;
    };
    AppComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        this.hideOverlayMenu();
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarSubItemClick = function (event) {
        event.preventDefault();
    };
    AppComponent.prototype.onRightPanelButtonClick = function (event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    };
    AppComponent.prototype.onRightPanelClick = function () {
        this.rightPanelClick = true;
    };
    AppComponent.prototype.onMegaMenuButtonClick = function (event) {
        this.megaMenuClick = true;
        this.megaMenuActive = !this.megaMenuActive;
        event.preventDefault();
    };
    AppComponent.prototype.onMegaMenuClick = function () {
        this.megaMenuClick = true;
    };
    AppComponent.prototype.hideOverlayMenu = function () {
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    };
    AppComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    AppComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    AppComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    AppComponent.prototype.isOverlay = function () {
        return this.layoutMode === 'overlay';
    };
    tslib_1.__decorate([
        core_1.ViewChild('layoutMenuScroller'),
        tslib_1.__metadata("design:type", primeng_1.ScrollPanel)
    ], AppComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.Renderer2, BSAuth_service_1.BSAuth])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map