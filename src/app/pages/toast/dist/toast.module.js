"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ToastPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var toast_routing_module_1 = require("./toast-routing.module");
var toast_page_1 = require("./toast.page");
var components_module_1 = require("src/app/components/components.module");
var ToastPageModule = /** @class */ (function () {
    function ToastPageModule() {
    }
    ToastPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                toast_routing_module_1.ToastPageRoutingModule,
                components_module_1.ComponentsModule
            ],
            declarations: [toast_page_1.ToastPage]
        })
    ], ToastPageModule);
    return ToastPageModule;
}());
exports.ToastPageModule = ToastPageModule;
