System.register(['angular2/core', './model/jvclass'], function(exports_1, context_1) {
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
    var core_1, jvclass_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jvclass_1_1) {
                jvclass_1 = jvclass_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "JV";
                    this.jvClassProps = new jvclass_1.jvComponent(2016, "This is a random text"); //jvComponent params = year, randomtext
                    this.debug();
                }
                AppComponent.prototype.debug = function () {
                    console.log(this.jvClassProps);
                };
                AppComponent = __decorate([
                    // <-- importing custom component
                    core_1.Component({
                        selector: 'jv-app',
                        //template: '<h1>{{title}}, an Angular 2 App</h1>' // <---this is the template to put in the component.
                        templateUrl: 'app/view/template-demo1.html',
                        styleUrls: ['../assets/css/style.css'] // <--- this component css only
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