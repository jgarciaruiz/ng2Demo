System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    //properties
                    this.title = "JV"; // <--- template value for {title}
                    this.year = 2016;
                    this.year = new Date().getFullYear();
                    this.randomMethod();
                }
                AppComponent.prototype.randomMethod = function () {
                    alert("Everything is fine in " + this.year);
                };
                AppComponent = __decorate([
                    // <-- importing Component from core
                    core_1.Component({
                        selector: 'jv-app',
                        //template: '<h1>{{title}}, an Angular 2 App</h1>' // <---this is the template to put in the component.
                        templateUrl: 'app/view/template-demo1.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); // <--- we need to export the class AppComponent. 
        }
    }
});
//# sourceMappingURL=app.component.js.map