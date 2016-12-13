System.register(['../model/jvclass'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jvclass_1;
    var DEMODATA;
    return {
        setters:[
            function (jvclass_1_1) {
                jvclass_1 = jvclass_1_1;
            }],
        execute: function() {
            //demo data array
            exports_1("DEMODATA", DEMODATA = [
                new jvclass_1.jvComponent(2016, 'This is a random text 01'),
                new jvclass_1.jvComponent(2015, 'This is a random text 02'),
                new jvclass_1.jvComponent(2014, 'This is a random text 03'),
                new jvclass_1.jvComponent(2013, 'This is a random text 04'),
                new jvclass_1.jvComponent(2012, 'This is a random text 05'),
                new jvclass_1.jvComponent(2011, 'This is a random text 06'),
                new jvclass_1.jvComponent(2010, 'This is a random text 07')
            ]);
        }
    }
});
//# sourceMappingURL=jvcontentdemo.js.map