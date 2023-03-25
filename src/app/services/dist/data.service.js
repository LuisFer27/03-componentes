"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUsuarios = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getMenuOpts = function () {
        return this.http.get('/assets/data/menu-opts.json');
    };
    DataService.prototype.getAlbumes = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/albums');
    };
    DataService.prototype.getHeroes = function () {
        return this.http.get('/assets/data/superheroes.json')
            .pipe(operators_1.delay(1500));
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
