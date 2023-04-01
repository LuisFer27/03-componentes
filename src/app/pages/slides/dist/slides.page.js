"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SlidesPage = void 0;
var core_1 = require("@angular/core");
var SlidesPage = /** @class */ (function () {
    function SlidesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                img: '/assets/slides/photos.svg',
                titulo: 'Comparte Fotos',
                desc: 'Mira y comparte increíbles fotos de todo el mundo'
            },
            {
                img: '/assets/slides/music-player-2.svg',
                titulo: 'Escucha Música',
                desc: 'Toda tu música favorita está aquí'
            },
            {
                img: '/assets/slides/calendar.svg',
                titulo: 'Nunca olvides nada',
                desc: 'El mejor calendario del mundo a tu disposición'
            },
            {
                img: '/assets/slides/placeholder-1.svg',
                titulo: 'Tu ubicación',
                desc: 'Siempre sabremos donde estás!'
            }
        ];
    }
    SlidesPage.prototype.ngOnInit = function () {
    };
    SlidesPage.prototype.onClick = function () {
        this.navCtrl.navigateBack('/');
    };
    SlidesPage = __decorate([
        core_1.Component({
            selector: 'app-slides',
            templateUrl: './slides.page.html',
            styleUrls: ['./slides.page.scss']
        })
    ], SlidesPage);
    return SlidesPage;
}());
exports.SlidesPage = SlidesPage;
