"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var app_topbar_component_1 = require("./app.topbar.component");
var app_breadcrumb_component_1 = require("./app.breadcrumb.component");
var app_rightpanel_component_1 = require("./app.rightpanel.component");
var app_profile_component_1 = require("./app.profile.component");
var breadcrumb_service_1 = require("./breadcrumb.service");
var app_footer_component_1 = require("./app.footer.component");
var app_menu_component_1 = require("./app.menu.component");
var app_megamenu_component_1 = require("./app.megamenu.component");
var scrollpanel_1 = require("primeng/scrollpanel");
var button_1 = require("primeng/button");
var tabview_1 = require("primeng/tabview");
var panel_1 = require("primeng/panel");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [animations_1.NoopAnimationsModule, testing_2.RouterTestingModule, scrollpanel_1.ScrollPanelModule, tabview_1.TabViewModule, panel_1.PanelModule, button_1.ButtonModule],
            declarations: [
                app_component_1.AppComponent,
                app_topbar_component_1.AppTopBarComponent,
                app_menu_component_1.AppMenuComponent,
                app_menu_component_1.AppSubMenuComponent,
                app_megamenu_component_1.AppMegamenuComponent,
                app_rightpanel_component_1.AppRightPanelComponent,
                app_profile_component_1.AppProfileComponent,
                app_footer_component_1.AppFooterComponent,
                app_breadcrumb_component_1.AppBreadcrumbComponent
            ],
            providers: [breadcrumb_service_1.BreadcrumbService]
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map