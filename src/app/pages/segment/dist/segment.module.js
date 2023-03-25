"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SegmentPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var segment_routing_module_1 = require("./segment-routing.module");
var segment_page_1 = require("./segment.page");
var components_module_1 = require("../../components/components.module");
var pipes_module_1 = require("../../pipes/pipes.module");
var SegmentPageModule = /** @class */ (function () {
    function SegmentPageModule() {
    }
    SegmentPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                segment_routing_module_1.SegmentPageRoutingModule,
                components_module_1.ComponentsModule,
                pipes_module_1.PipesModule
            ],
            declarations: [segment_page_1.SegmentPage]
        })
    ], SegmentPageModule);
    return SegmentPageModule;
}());
exports.SegmentPageModule = SegmentPageModule;
