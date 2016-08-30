var assert = require('assert');
var mainApp = require('../app');

describe('Main app', function () {
    describe('#numberOfEvens', function () {
        it('should return message "The input is not an array." when the input param is not an array', function () {
            assert.equal("The input is not an array.", mainApp.numberOfEvent(1));
        });
    });
});