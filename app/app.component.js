System.register(['angular2/core', './model/jvclass', './services/javi.service'], function(exports_1, context_1) {
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
    var core_1, jvclass_1, javi_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jvclass_1_1) {
                jvclass_1 = jvclass_1_1;
            },
            function (javi_service_1_1) {
                javi_service_1 = javi_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //default values for app launch
                function AppComponent(_javiService) {
                    this._javiService = _javiService;
                    this.title = 'JV';
                    this.dataService = this._javiService.getJaviDemo(); // <-- store service data method results
                    console.log(this.dataService);
                    this.showData = false; //change it to false to hide 'randomtext' in template-demo1
                    this.jvClassProps = new jvclass_1.jvComponent(2016, 'This is a random text'); //jvComponent params = year, randomtext
                    this.debug();
                    this.dataServiceArray = this._javiService.getJaviDemoArray();
                }
                //methods
                AppComponent.prototype.debug = function () {
                    console.log(this.jvClassProps);
                };
                //function used in other templates, for example displayData() is being called in template-demo1.html
                AppComponent.prototype.displayData = function (val) {
                    this.showData = val;
                };
                AppComponent.prototype.editRandomText = function (newText) {
                    console.log(newText);
                    this.jvClassProps = newText; // <-- get clicked item text and update input value with it
                };
                AppComponent = __decorate([
                    // <-- import service
                    core_1.Component({
                        selector: 'jv-app',
                        //template: '<h1>{{title}}, an Angular 2 App</h1>' // <---this is the template to put in the component.
                        templateUrl: 'app/view/template-demo1.html',
                        styleUrls: ['../assets/css/style.css'],
                        providers: [javi_service_1.JaviService] // <-- array with all the services that will use this component
                    }), 
                    __metadata('design:paramtypes', [javi_service_1.JaviService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); // <--- we need to export the class AppComponent. 
        }
    }
});
//# sourceMappingURL=app.component.js.map