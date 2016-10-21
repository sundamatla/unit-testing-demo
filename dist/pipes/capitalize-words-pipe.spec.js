"use strict";
var testing_1 = require('angular2/testing');
var capitalize_words_pipe_1 = require('./capitalize-words-pipe');
testing_1.describe('Capitalize Words Pipe Test', function () {
    var pipe;
    testing_1.beforeEach(function () {
        pipe = new capitalize_words_pipe_1.CapitalizeWordsPipe();
    });
    testing_1.it('Should capitalize each word in a string', function () {
        var result = pipe.transform('web development technologies', null);
        testing_1.expect(result).toEqual('Web Development Technologies');
    });
});
//# sourceMappingURL=capitalize-words-pipe.spec.js.map