"use strict";
var testing_1 = require('angular2/testing');
var my_service_1 = require('./my-service');
testing_1.describe('MyService Tests', function () {
    var service = new my_service_1.MyService;
    testing_1.it('Should return a list of Task runners', function () {
        var results = service.getTaskRunners(2);
        testing_1.expect(results).toEqual(['Grunt', 'Gulp']);
        testing_1.expect(results.length).toBe(2);
    });
    testing_1.it('Should get all available task runners', function () {
        var results = service.getTaskRunners(1000);
        testing_1.expect(results).toEqual(['Grunt', 'Gulp', 'Webpack']);
    });
});
//# sourceMappingURL=my-service.spec.js.map