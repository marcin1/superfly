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
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var home_1 = require('./pages/home/home');
var sun_1 = require('./pages/sun/sun');
var SuperFlyApp = (function () {
    function SuperFlyApp(platform) {
        var _this = this;
        this.platform = platform;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.hide();
            _this.rootPage = home_1.default;
        });
    }
    SuperFlyApp = __decorate([
        core_1.Component({
            templateUrl: 'build/app.html',
            directives: [sun_1.default]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], SuperFlyApp);
    return SuperFlyApp;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SuperFlyApp;
ionic_angular_1.ionicBootstrap(SuperFlyApp, null, {
    pageTransition: 'md',
});
