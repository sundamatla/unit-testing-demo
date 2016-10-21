"use strict";
var testing_1 = require('angular2/testing');
var my_list_1 = require("./my-list");
var my_service_1 = require("../services/my-service");
testing_1.describe('MyList Tests', function () {
    var list;
    var service = new my_service_1.MyService();
    testing_1.beforeEach(function () {
        list = new my_list_1.MyList(service);
    });
    testing_1.it('Should get 3 Task runners', function () {
        list.ngOnInit();
        testing_1.expect(list.items.length).toBe(3);
    });
});
//# sourceMappingURL=my-list.spec.js.map