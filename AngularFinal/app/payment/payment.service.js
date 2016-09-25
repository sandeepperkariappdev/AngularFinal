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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var url = "https://airporthubops-qa-enfsvc.ual.com/sdb/SDBAPI/Channels/HTTP/ArptSuprView?versionNo=2.0&gates=C-30,C-31,C-32,C-33,C-34,C-35,C-36,C-37,C-39,C-40,C-41,C-42,C-43,C-44,C-45,E1,E2,E3,E4,E5,E7,E8,E10,E11,E12,E14,E15,E16,E9,E17,E18,E19,E20,E21,E22,E23,E24,C-14,C-16,C-17,C-18,C-19,C-20,C-21,C-22,C-23,C-24,C-25,C-26,D1,D10,D11,D12,D2,D3,D4,D4A,D5,D6,D6A,D7,D8,D9,A1,A2,A7,A8,B76,B77,B79,B79A,B80,B81,B83,B85A,B86,B87,B88,B1,B10,B11,B12,B14,B15,B16,B2,B3,B4,B5,B6,B7,B8,B9,B17,B18,B19,B20,B21,B22,B23,B24,B25,B26,B27,B29,B30,B31&rplyInJson=true&station=IAH&viewType=ALL";
var token = "Bearer AAENU1ZDLVRTVkRCT0FSRFV7WbFsw_yzufa5Es9ounNsO1dKSUZskRiLsYoXXJi8jEsl1CAl4R92c_0Gh_vag7Fhi02RRNmQ4oT1I3GA4y4";
var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
    }
    PaymentService.prototype.getPayments = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(url, options).map(this.extractData).catch(this.handleError);
    };
    PaymentService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    PaymentService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    PaymentService.prototype.sendData = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('app/heroes.json', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PaymentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map