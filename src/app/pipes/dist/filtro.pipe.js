"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FiltroPipe = void 0;
var core_1 = require("@angular/core");
var FiltroPipe = /** @class */ (function () {
    function FiltroPipe() {
    }
    FiltroPipe.prototype.transform = function (arreglo, texto, columna) {
        if (texto === void 0) { texto = ''; }
        if (columna === void 0) { columna = 'title'; }
        if (texto === '') {
            return arreglo;
        }
        if (!arreglo) {
            return arreglo;
        }
        texto = texto.toLocaleLowerCase();
        return arreglo.filter(function (item) { return item[columna].toLowerCase().includes(texto); });
    };
    FiltroPipe = __decorate([
        core_1.Pipe({
            name: 'filtro'
        })
    ], FiltroPipe);
    return FiltroPipe;
}());
exports.FiltroPipe = FiltroPipe;
