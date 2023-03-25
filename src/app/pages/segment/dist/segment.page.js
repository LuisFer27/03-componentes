"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SegmentPage = void 0;
var core_1 = require("@angular/core");
var SegmentPage = /** @class */ (function () {
    function SegmentPage(dataService) {
        this.dataService = dataService;
        this.publisher = '';
    }
    SegmentPage.prototype.ngOnInit = function () {
        this.superHeroes = this.dataService.getHeroes();
    };
    SegmentPage.prototype.segmentChanged = function (event) {
        //console.log(event.detail.value);
        // if ( event.detail.value === 'todos' ) {
        //   return this.publisher = '';
        // }
        this.publisher = event.detail.value;
    };
    SegmentPage = __decorate([
        core_1.Component({
            selector: 'app-segment',
            templateUrl: './segment.page.html',
            styleUrls: ['./segment.page.scss']
        })
    ], SegmentPage);
    return SegmentPage;
}());
exports.SegmentPage = SegmentPage;
