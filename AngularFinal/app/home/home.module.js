"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var payment_component_1 = require('../../app/payment/payment.component');
var claims_component_1 = require('../../app/claims/claims.component');
var cards_component_1 = require('../../app/cards/cards.component');
var dairyfeed_component_1 = require('../../app/dairyfeed/dairyfeed.component');
var needhelp_component_1 = require('../../app/needhelp/needhelp.component');
var home_service_1 = require('../../app/home/home.service');
var home_component_1 = require('./home.component');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                payment_component_1.PaymentComponent,
                claims_component_1.ClaimsComponent,
                cards_component_1.CardsComponent,
                dairyfeed_component_1.DairyFeedComponent,
                needhelp_component_1.NeedHelpComponent
            ],
            providers: [
                home_service_1.HomeService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map