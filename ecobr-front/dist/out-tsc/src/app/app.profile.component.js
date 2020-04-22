"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/animations");
var AppProfileComponent = /** @class */ (function () {
    function AppProfileComponent(app) {
        this.app = app;
    }
    AppProfileComponent.prototype.onClick = function (event) {
        this.active = !this.active;
        event.preventDefault();
    };
    AppProfileComponent.prototype.onProfileItemClick = function (event, item) {
        if (this.activeProfileItem === item) {
            this.activeProfileItem = null;
        }
        else {
            this.activeProfileItem = item;
        }
        event.preventDefault();
    };
    AppProfileComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-inline-profile',
            template: "\n        <div class=\"user-profile\">\n            <a href=\"#\" (click)=\"onClick($event)\" id=\"sidebar-profile-button\">\n                <img src=\"assets/layout/images/avatar.png\" alt=\"california-layout\"/>\n                <span class=\"sidebar-profile-name\">Raimndo</span>\n                <span class=\"sidebar-profile-role\">Administrator</span>\n            </a>\n\n            <ul id=\"sidebar-usermenu\" class=\"usermenu\" [@menu]=\"active ? 'visible' : 'hidden'\">\n                <li #profile [ngClass]=\"{'menuitem-active':activeProfileItem === profile}\">\n                    <a href=\"#\" (click)=\"onProfileItemClick($event,profile)\">\n                        <i class=\"fa fa-fw fa-user\"></i>\n                        <span class=\"topbar-item-name\">Profile</span>\n                    </a>\n                </li>\n                <li #settings [ngClass]=\"{'menuitem-active':activeProfileItem === settings}\">\n                    <a href=\"#\" (click)=\"onProfileItemClick($event,settings)\">\n                        <i class=\"fa fa-fw fa-cog\"></i>\n                        <span class=\"topbar-item-name\">Settings</span>\n                        <i class=\"layout-menuitem-toggler fa fa-fw fa-angle-down\"></i>\n                    </a>\n                    <ul>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-paint-brush\"></i>\n                                <span>Change Theme</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-star-o\"></i>\n                                <span>Favorites</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-lock\"></i>\n                                <span>Lock Screen</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-picture-o\"></i>\n                                <span>Wallpaper</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <li #messages [ngClass]=\"{'menuitem-active':activeProfileItem === messages}\">\n                    <a href=\"#\" (click)=\"onProfileItemClick($event,messages)\">\n                        <i class=\"fa fa-fw fa-envelope-o\"></i>\n                        <span class=\"topbar-item-name\">Messages</span>\n                        <i class=\"layout-menuitem-toggler fa fa-fw fa-angle-down\"></i>\n                    </a>\n                    <ul>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" class=\"topbar-message\">\n                                <img src=\"assets/layout/images/avatar1.png\" width=\"25\"/>\n                                <span>Give me a call</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" class=\"topbar-message\">\n                                <img src=\"assets/layout/images/avatar2.png\" width=\"25\"/>\n                                <span>Sales reports attached</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" class=\"topbar-message\">\n                                <img src=\"assets/layout/images/avatar3.png\" width=\"25\"/>\n                                <span>About your invoice</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" class=\"topbar-message\">\n                                <img src=\"assets/layout/images/avatar2.png\" width=\"25\"/>\n                                <span>Meeting today at 10pm</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" class=\"topbar-message\">\n                                <img src=\"assets/layout/images/avatar4.png\" width=\"25\"/>\n                                <span>Out of office</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <li #notifications [ngClass]=\"{'menuitem-active':activeProfileItem === notifications}\">\n                    <a href=\"#\" (click)=\"onProfileItemClick($event,notifications)\">\n                        <i class=\"fa fa-fw fa-bell-o\"></i>\n                        <span class=\"topbar-item-name\">Notifications</span>\n                        <i class=\"layout-menuitem-toggler fa fa-fw fa-angle-down\"></i>\n                    </a>\n                    <ul>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-tasks\"></i>\n                                <span>Pending tasks</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-calendar-check-o\"></i>\n                                <span>Meeting today at 3pm</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-download\"></i>\n                                <span>Download documents</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-fw fa-plane\"></i>\n                                <span>Book flight</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    ",
            animations: [
                animations_1.trigger('menu', [
                    animations_1.state('hidden', animations_1.style({
                        height: '0px'
                    })),
                    animations_1.state('visible', animations_1.style({
                        height: '*'
                    })),
                    animations_1.transition('visible => hidden', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    animations_1.transition('hidden => visible', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [app_component_1.AppComponent])
    ], AppProfileComponent);
    return AppProfileComponent;
}());
exports.AppProfileComponent = AppProfileComponent;
//# sourceMappingURL=app.profile.component.js.map