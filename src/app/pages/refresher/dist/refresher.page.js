"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RefresherPage = void 0;
var core_1 = require("@angular/core");
var RefresherPage = /** @class */ (function () {
    function RefresherPage() {
        this.items = [];
    }
    RefresherPage.prototype.ngOnInit = function () {
    };
    RefresherPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.items = Array(20);
            event.target.complete();
        }, 1500);
    };
    RefresherPage = __decorate([
        core_1.Component({
            selector: 'app-refresher',
            templateUrl: './refresher.page.html',
            styleUrls: ['./refresher.page.scss']
        })
    ], RefresherPage);
    return RefresherPage;
}());
exports.RefresherPage = RefresherPage;
