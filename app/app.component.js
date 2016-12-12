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
                    this.showData = false; //change it to false to hide 'randomtext' in template-demo1
                    this.jvClassProps = new jvclass_1.jvComponent(2016, 'This is a random text'); //jvComponent params = year, randomtext
                    this.mylist = [
                        new jvclass_1.jvComponent(2016, 'This is a random text 01'),
                        new jvclass_1.jvComponent(2015, 'This is a random text 02'),
                        new jvclass_1.jvComponent(2014, 'This is a random text 03'),
                        new jvclass_1.jvComponent(2013, 'This is a random text 04'),
                        new jvclass_1.jvComponent(2012, 'This is a random text 05'),
                        new jvclass_1.jvComponent(2011, 'This is a random text 06')
                    ];
                    this.debug();
                }
                //methods
                AppComponent.prototype.debug = function () {
                    console.log(this.jvClassProps);
                };
                AppComponent.prototype.displayData = function (val) {
                    this.showData = val;
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