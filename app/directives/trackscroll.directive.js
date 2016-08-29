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
var TrackScrollDirective = (function () {
    function TrackScrollDirective() {
        this.scrolled = new core_1.EventEmitter();
    }
    TrackScrollDirective.prototype.track = function (event) {
        this.scrolled.emit(document.body.scrollTop);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TrackScrollDirective.prototype, "scrolled", void 0);
    TrackScrollDirective = __decorate([
        core_1.Directive({
            selector: '[track-scroll]',
            host: { '(window:scroll)': 'track($event)' },
        }), 
        __metadata('design:paramtypes', [])
    ], TrackScrollDirective);
    return TrackScrollDirective;
}());
exports.TrackScrollDirective = TrackScrollDirective;
//# sourceMappingURL=trackscroll.directive.js.map