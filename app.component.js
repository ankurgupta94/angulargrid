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
var core_1 = require("@angular/core");
var program_1 = require("./models/program");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var AppComponent = (function () {
    function AppComponent() {
        this.programs = [];
        this.programs.push(new program_1.Program('Walmart', '1', 'TTC'));
        this.programs.push(new program_1.Program('Amazon', '2', 'Presto'));
        this.programs.push(new program_1.Program('SUC', '3', 'OCT'));
        this.programs.push(new program_1.Program('ebay', '4', 'UPE'));
        this.programs.push(new program_1.Program('Alibaba', '5', 'BUR'));
        this.programs.push(new program_1.Program('Filpkart', '6', 'OCT'));
        this.programs.push(new program_1.Program('Snapdeal', '7', 'UPE'));
        this.programs.push(new program_1.Program('ShopClues', '8', 'BUR'));
    }
    AppComponent.prototype.close = function () {
        this.modal.close();
    };
    AppComponent.prototype.open = function (item) {
        this.selectedProgram = item;
        this.modal.open();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('myModal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], AppComponent.prototype, "modal", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-grid',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map