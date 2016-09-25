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
var payment_service_1 = require('../../app/payment/payment.service');
var PaymentComponent = (function () {
    function PaymentComponent(_paymentService) {
        this._paymentService = _paymentService;
        this.title = 'app works!';
        // Utilize .get request from app/friend.service.ts to populate friends object
        //this.payments = _paymentService.getPayments();
        this.getData();
    }
    PaymentComponent.prototype.getData = function () {
        var _this = this;
        this._paymentService.getPayments().subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    PaymentComponent.prototype.addHero = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this._paymentService.sendData(name)
            .subscribe(function (hero) { return _this.heroes.push(hero); }, function (error) { return _this.errorMessage = error; });
    };
    PaymentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [payment_service_1.PaymentService],
            selector: 'payment',
            templateUrl: 'payment.component.html',
            styleUrls: ['payment.component.css']
        }), 
        __metadata('design:paramtypes', [payment_service_1.PaymentService])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map