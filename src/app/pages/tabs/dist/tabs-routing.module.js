"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabsPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tabs_page_1 = require("./tabs.page");
var routes = [
    {
        path: '',
        redirectTo: '/tabs/account',
        pathMatch: 'full'
    },
    {
        path: '',
        component: tabs_page_1.TabsPage,
        children: [
            {
                path: 'account',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../avatar/avatar.module'); }).then(function (m) { return m.AvatarPageModule; }); }
            },
            {
                path: 'contact',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../list/list.module'); }).then(function (m) { return m.ListPageModule; }); }
            },
            {
                path: 'settings',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../infinite/infinite.module'); }).then(function (m) { return m.InfinitePageModule; }); }
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
exports.TabsPageRoutingModule = TabsPageRoutingModule;
